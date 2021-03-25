import axios from 'axios'
import crypto from 'crypto'
import fs from 'fs'
import * as stream from 'stream'
import { promisify } from 'util'

const APK_FILE = './public/tooot-latest.apk'

const getChecksum = () => {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256')
    const input = fs.createReadStream(APK_FILE)

    input.on('error', reject)

    input.on('data', function (chunk) {
      hash.update(chunk)
    })

    input.on('close', function () {
      resolve(hash.digest('hex'))
    })
  })
}

const finished = promisify(stream.finished)
const download = async url => {
  const writer = fs.createWriteStream(APK_FILE)
  return axios
    .get(url, {
      responseType: 'stream'
    })
    .then(async response => {
      response.data.pipe(writer)
      return finished(writer)
    })
}

const main = () => {
  axios
    .get('https://api.github.com/repos/tooot-app/app/releases', {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `token ${process.env.GITHUB_TOKEN}`
      }
    })
    .then(async ({ data }) => {
      const latest = data.find(d => d.prerelease)
      await download(latest.assets[0].browser_download_url)
      getChecksum().then(checksum => {
        console.log(checksum)
        fs.writeFileSync('./public/checksum.json', JSON.stringify({ checksum }))
      })
    })
    .catch(err => console.log(err))
}

main()

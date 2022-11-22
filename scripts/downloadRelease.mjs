import axios from 'axios'
import fs from 'fs'

const main = () => {
  axios
    .get('https://api.github.com/repos/tooot-app/app/releases', {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `token ${process.env.GITHUB_TOKEN}`
      }
    })
    .then(async ({ data }) => {
      const latest = data.find(d => !d.prerelease)

      fs.writeFileSync(
        './public/version.json',
        JSON.stringify({ latest: latest.name.replace('v', '') })
      )
    })
    .catch(err => console.log(err))
}

main()

import fs from 'fs'
import fetch from 'node-fetch'

fetch('https://api.github.com/repos/tooot-app/app/releases', {
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: `token ${process.env.GITHUB_TOKEN}`
  }
}).then(async res => {
  const data = await res.json()
  const latest = data.find(d => !d.prerelease)

  fs.writeFileSync(
    './public/version.json',
    JSON.stringify({ latest: latest.name.replace('v', '') })
  )
})

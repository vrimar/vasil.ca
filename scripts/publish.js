const path = require('path');
const ftp = require('basic-ftp');
const json = require('../deploy.json');

async function publish() {
  const client = new ftp.Client();
  const cwd = process.cwd();
  const publicDir = path.resolve(cwd, 'out');

  try {
    await client.access({
      host: json.host,
      user: json.user,
      password: json.password,
      secure: true,
      secureOptions: {
        rejectUnauthorized: false
      }
    });

    await client.cd('/');
    await client.clearWorkingDir();
    await client.uploadDir(publicDir);
  }
  catch (err) {
    console.log(err)
  }

  client.close()
}

publish();

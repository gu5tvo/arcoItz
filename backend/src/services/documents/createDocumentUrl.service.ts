import axios from 'axios'

const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

const CLIENT_ID = '516987131192-fg253r3une74erqir9amn4ur8p4tmn9g.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//041gcx_MIyS1xCgYIARAAGAQSNgF-L9Ir__5i3iu0-u53Ge550YGMQZLRMdYSc8zXAgU8vSaaHjl_MbuHABqha0VgOSzEruUJXA';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
  version: 'v3',
  auth: oauth2Client,
});

export default async function createDocumentUrlService(file: File){
  console.log(file.name);
  
  try {
		const filePath = path.join(__dirname, file.name);
		const response = await drive.files.create({
      requestBody: {
        name: file.name, 
        mimeType: 'application/pdf',
      },
      media: {
        mimeType: 'application/pdf',
        body: fs.createReadStream(filePath),
      },
    });

	return response.data;
  } catch (error) {
    console.log(error);
  }
}


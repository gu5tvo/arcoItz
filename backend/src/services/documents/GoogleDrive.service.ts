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


export default async function createDocumentUrlService(file: Express.Multer.File){
  
  try {

		const response = await drive.files.create({
      requestBody: {
        name: file.originalname, 
        mimeType: 'application/pdf',
      },
      media: {
        mimeType: 'application/pdf',
        body: fs.createReadStream(file.path),
      },
    });

    fs.unlinkSync(file.path);
    console.log(response);
    
	  return `https://drive.google.com/file/d/${response.data.id}/view`;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteFileFromDrive(googleId: string) {
  try {
    await drive.files.delete({
      fileId: googleId,
    });

  } catch (error) {
    console.error(`Erro ao excluir o arquivo`);
  }
}
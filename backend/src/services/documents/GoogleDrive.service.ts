import axios from 'axios'
import 'dotenv/config'

const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

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
    
    await drive.permissions.create({
      fileId: response.data.id,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });


    const result = await drive.files.get({
      fileId: response.data.id,
      fields: 'webViewLink',
    });

  
	  return result.data.webViewLink;
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
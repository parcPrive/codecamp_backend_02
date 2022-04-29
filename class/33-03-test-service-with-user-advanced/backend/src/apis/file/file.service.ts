import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
import { FileUpload } from 'graphql-upload';
interface IFile {
  files: FileUpload[];
}
@Injectable()
export class FileService {
  async upload({ files }: IFile) {
    const storage = new Storage({}).bucket('moki');
    // 일단 먼저 다 받기
    console.log(storage);

    const waitedFiles = await Promise.all(files);
    const results = await Promise.all(
      waitedFiles.map((el) => {
        return new Promise((resolve, reject) => {
          el.createReadStream()
            .pipe(storage.file(el.filename).createWriteStream())
            .on('finish', () => {
              resolve(`moki/${el.filename}`);
            })
            .on('error', (e) => {
              console.log('========================');
              console.log(e);
            });
        });
      }),
    ); //[file,file,file,...]
    return results;
  }
}

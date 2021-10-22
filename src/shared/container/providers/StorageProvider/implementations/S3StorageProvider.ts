import { S3 } from 'aws-sdk';
import fs from 'fs';
import { getExtension, getType } from 'mime';
import path from 'path';

import upload from '@config/upload';

import { ISaveFileDTO } from '../dtos/ISaveFileDTO';
import { IStorageProvider } from '../models/IStorageProvider';

export class S3StorageProvider implements IStorageProvider {
  private client: S3;

  constructor() {
    this.client = new S3({
      region: process.env.AWS_BUCKET_REGION,
    });
  }

  async save({ id, file, folder }: ISaveFileDTO): Promise<string> {
    const filePath = path.resolve(upload.tmpFolder, file);
    const fileContent = await fs.promises.readFile(filePath);

    const fileType = getType(file.replace(/s/g, ''));
    const fileExtension = getExtension(fileType!);
    const fileName = `${id}-avatar.${fileExtension}`;

    await this.client
      .putObject({
        Bucket: `${process.env.AWS_BUCKET}/${folder}`,
        Key: fileName,
        ACL: 'public-read',
        Body: fileContent,
        ContentType: fileType,
      })
      .promise();

    await fs.promises.unlink(filePath);

    return fileName;
  }

  async delete(file: string, folder: string): Promise<void> {
    await this.client
      .deleteObject({
        Bucket: `${process.env.AWS_BUCKET}/${folder}`,
        Key: file,
      })
      .promise();
  }
}

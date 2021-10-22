import fs from 'fs';
import { getExtension, getType } from 'mime';
import path from 'path';

import upload from '@config/upload';

import { ISaveFileDTO } from '../dtos/ISaveFileDTO';
import { IStorageProvider } from '../models/IStorageProvider';

export class LocalStorageProvider implements IStorageProvider {
  async save({ id, file, folder }: ISaveFileDTO): Promise<string> {
    const type = getType(file.replace(/s/g, ''));
    const fileExtension = getExtension(type!);
    const fileName = `${id}-avatar.${fileExtension}`;

    await fs.promises.rename(
      path.resolve(upload.tmpFolder, file),
      path.resolve(upload.tmpFolder, folder, fileName),
    );

    return fileName;
  }

  async delete(file: string, folder: string): Promise<void> {
    const fileName = path.resolve(upload.tmpFolder, folder, file);

    try {
      await fs.promises.stat(fileName);
    } catch (error) {
      return;
    }

    await fs.promises.unlink(fileName);
  }
}

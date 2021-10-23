import { getExtension, getType } from 'mime';

import { ISaveFileDTO } from '../dtos/ISaveFileDTO';
import { IStorageProvider } from '../models/IStorageProvider';

export class FakeStorageProvider implements IStorageProvider {
  private files: ISaveFileDTO[] = [];

  async save({ id, file, folder }: ISaveFileDTO): Promise<string> {
    const type = getType(file.replace(/s/g, ''));
    const fileExtension = getExtension(type!);
    const fileName = `${id}-avatar.${fileExtension}`;

    this.files.push({
      id,
      file,
      folder,
    });

    return fileName;
  }
  async delete(file: string, folder: string): Promise<void> {
    const updatedFiles = this.files.filter(
      item => item.file !== file && item.folder !== folder,
    );

    this.files = updatedFiles;
  }
}

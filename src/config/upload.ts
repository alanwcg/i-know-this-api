// import crypto from 'crypto';
import multer from 'multer';
import path from 'path';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  tmpFolder,

  storage: multer.diskStorage({
    destination: tmpFolder,
    filename: (request, file, callback) => {
      // const fileHash = crypto.randomBytes(16).toString('hex');
      const fileName = `${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};

import multer from 'multer';
import crypto from 'crypto';
import path from 'path';

const tmpFolder = path.resolve(__dirname, '..', '..', 'temp');

export default {
  directory: tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename: (request, file, callback) => {
      const fileHash = crypto.randomBytes(10).toString('HEX');
      const filename = `${fileHash}-${file.originalname}`;
      return callback(null, filename);
    },
  }),
};

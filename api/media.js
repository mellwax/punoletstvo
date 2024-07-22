import express, {Router} from "express";
import serverless from "serverless-http";
import crypto from "crypto";
import path from "path";

const app = express();
const router = Router();

const {Storage} = require('@google-cloud/storage');
const gcStorage = new Storage();
const bucket = gcStorage.bucket('andis-club-data');

const multer = require('multer');
const multerStorage = multer.diskStorage({
    filename: (req, file, callback) => {
        crypto.randomBytes(16, (err, raw) => {
            if (err) return callback(err);

            const ext = path.extname(file.originalname);
            const uniqueName = raw.toString('hex') + ext;

            callback(null, uniqueName);
        })
    }
});
const upload = multer({storage: multerStorage});

router.post('/', upload.single('file'), async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.ANDISCLUB_BASE_URL);
    const storageRes = await bucket.upload(req.file.path, {
        destination: req.file.filename,
        gzip: true
    })
        .catch(err => {
            console.error(err);
            res.sendStatus(500);
        });

    res.sendStatus(200);
});

router.get('/', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.ANDISCLUB_BASE_URL);

    const [files] = await bucket.getFiles();

    const media = files.map(file => ({
        src: file.metadata.mediaLink,
        name: file.id,
        type: file.metadata.contentType.split('/')[0]
    }));

    if (!files) return res.sendStatus(500);

    res.status(200).json(media);
});

app.use('/media', router);

export const handler = serverless(app);

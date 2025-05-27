import express from 'express';
import { execute, languages, snippets } from '../controllers/judge0.controller';

const router = express.Router();

router.get('/snippets', snippets);
router.get('/languages', languages);
router.post('/execute', execute);

export default router;

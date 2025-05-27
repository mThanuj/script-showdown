import { Request, Response } from 'express';
import axiosInstance from '../config/axios.config';
import { base64Decode, base64Encode } from '../lib/utils';
import { languageSnippets } from '../lib/constants';

export const snippets = async (_req: Request, res: Response) => {
  res.json({ data: languageSnippets });
};

export const languages = async (_req: Request, res: Response) => {
  try {
    const response = await axiosInstance.get('/languages');
    res.json({ data: response.data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const execute = async (req: Request, res: Response) => {
  try {
    const { source_code, language_id, stdin } = req.body;

    const encodedSourceCode = base64Encode(source_code);

    const payload = {
      source_code: encodedSourceCode,
      language_id,
      stdin: stdin ? base64Encode(stdin) : undefined,
    };

    const response = await axiosInstance.post('/submissions', payload, {
      params: {
        wait: true,
        base64_encoded: true,
      },
    });

    let output = response.data.stdout;
    if (output) {
      output = base64Decode(output);
    }

    res.json({
      data: {
        ...response.data,
        stdout: output,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

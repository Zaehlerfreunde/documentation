import type { OpenAPIOptions } from 'fumadocs-openapi/server';
import { readFile } from 'node:fs/promises';
import { parse } from 'yaml';

export const OPENAPI_DOCUMENT_ID = './public/api/openapi.yaml';

const API_BASE_URL = 'https://external.prod.zaehlerfreunde.com/partner';

export const openapiInput: NonNullable<OpenAPIOptions['input']> = {
  [OPENAPI_DOCUMENT_ID]: async () => {
    const source = await readFile(OPENAPI_DOCUMENT_ID, 'utf8');
    const document = parse(source);

    return {
      ...document,
      servers: [
        {
          url: API_BASE_URL,
          description: 'Production',
        },
      ],
    };
  },
};

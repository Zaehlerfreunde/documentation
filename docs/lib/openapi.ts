import { createOpenAPI } from 'fumadocs-openapi/server';
import { openapiInput } from './openapi-input';

export const openapi = createOpenAPI({
  input: openapiInput,
});

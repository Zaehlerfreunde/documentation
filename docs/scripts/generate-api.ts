import { generateFiles } from 'fumadocs-openapi';
import { createOpenAPI } from 'fumadocs-openapi/server';
import { mkdir, rm, writeFile } from 'node:fs/promises';

const openapi = createOpenAPI({
  input: ['./public/api/openapi.yaml'],
});

function kebabCase(value: string) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}

async function main() {
  const outputDir = './content/docs/rpcapi';
  const taggedPages = new Map<string, string[]>();

  function addPage(tag: string, page: string) {
    const pages = taggedPages.get(tag) ?? [];
    if (!pages.includes(page)) pages.push(page);
    taggedPages.set(tag, pages);
  }

  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });

  await generateFiles({
    input: openapi,
    output: outputDir,
    includeDescription: true,
    addGeneratedComment: true,
    per: 'operation',
    name(output) {
      if (output.type === 'operation') {
        const operation = this.document.paths?.[output.item.path]?.[
          output.item.method
        ];
        const page = kebabCase(operation?.operationId ?? output.item.path);
        addPage(operation?.tags?.[0]?.trim() || 'Other', page);
        return page;
      }

      const page = kebabCase(output.item.name);
      addPage('Webhooks', page);
      return page;
    },
  });

  const metaPath = `${outputDir}/meta.json`;
  const pages = Array.from(taggedPages, ([tag, entries]) => [
    `---${tag}---`,
    ...entries,
  ]).flat();
  await writeFile(
    metaPath,
    `${JSON.stringify({ title: 'API', icon: 'Braces', pages }, null, 2)}\n`,
  );
}

void main();

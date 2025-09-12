import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";


const config: Config = {
  title: 'Zählerfreunde Dokumentation',
  tagline: 'Alle technischen Dokumente, Anleitungen und API-Referenzen an einem Ort.',
  favicon: 'https://cdn.zaehlerfreunde.com/logos/favicon.ico',

  future: {
    v4: true, 
  },

  url: 'https://docs.zaehlerfreunde.de',
  baseUrl: '/',

  organizationName: 'zaehlerfreunde', 
  projectName: 'documentation', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
    localeConfigs: {
      de: {
        label: 'Deutsch',
        htmlLang: 'de-DE',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          docItemComponent: "@theme/ApiItem",
          editUrl: 'https://github.com/zaehlerfreunde/documentation/tree/main/docs/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api", 
        docsPluginId: "classic", 
        config: {
          petstore: { 
            specPath: "./static/api/openapi.yaml", 
            outputDir: "docs/rpcapi", 
              sidebarOptions: {
                groupPathsBy: "tag", 
              },
          } satisfies OpenApiPlugin.Options,
        }
      },
    ]
  ],
  themes: ["docusaurus-theme-openapi-docs"],

  themeConfig: {
    stylesheets: [
      'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap',
    ],
    navbar: {
      title: 'Dokumentation',
      logo: {
        alt: 'Zählerfreunde Logo',
        src: 'https://cdn.zaehlerfreunde.com/logos/zaehlerfreunde-icon-small.png',
        srcDark: 'https://cdn.zaehlerfreunde.com/logos/zaehlerfreunde-icon-small.png',
      },
      items: [
        {
          href: 'https://www.zaehlerfreunde.de',
          label: 'Website',
          position: 'right'
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Zaehlerfreunde/documentation/', 
            },
            {
              href: 'https://www.zaehlerfreunde.de',
              label: 'Website',
            },
            {
              href: 'https://app.zaehlerfreunde.de',
              label: 'Nutzer-Portal',
            },
            {
              href: 'https://app.admin.zaehlerfreunde.de/',
              label: 'Admin-Portal',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Zählerfreunde`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
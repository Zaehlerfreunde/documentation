import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";


const config: Config = {
  title: 'Zählerfreunde Dokumentation',
  tagline: 'Alle technischen Dokumente, Anleitungen und API-Referenzen an einem Ort.',
  favicon: 'https://cdn.zaehlerfreunde.com/logos/favicon.ico',

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://docs.zaehlerfreunde.de',
  baseUrl: '/',

  organizationName: 'zaehlerfreunde', 
  projectName: 'documentation', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en-GB',
      },
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
          editUrl: 'https://github.com/zaehlerfreunde/your-repo-name/tree/main/',
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
    image: 'img/docusaurus-social-card.jpg', // It's a good idea to create a social card for your project
    navbar: {
      title: 'Dokumentation',
      logo: {
        alt: 'Zählerfreunde Logo',
        src: 'https://cdn.zaehlerfreunde.com/logos/zaehlerfreunde-logo.png',
        srcDark: 'https://cdn.zaehlerfreunde.com/logos/zaehlerfreunde-logo-white.png',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/zaehlerfreunde/your-repo-name', // Update this link
          label: 'GitHub',
          position: 'right',
        },
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
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/zaehlerfreunde/your-repo-name', 
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Zählerfreunde. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
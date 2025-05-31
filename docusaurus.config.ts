import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Shaza Aly',
  tagline: 'Backend Engineering & Technical Writing',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://portfoliogoreact.vercel.app/', // Customize to your real domain
  baseUrl: '/',

  organizationName: 'shazaaly',
  projectName: 'my-api-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/shazaaly/my-api-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/shazaaly/shazaly.github.io?tab=readme-ov-file#readme',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/shazaaly-og.png', // Optional social preview image
    navbar: {
      title: 'Shaza Aly',
      logo: {
        alt: 'Shaza Aly Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: 'https://shazaali.substack.com/',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://github.com/shazaaly',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.upwork.com/freelancers/~011e3cb80351dfc57e',
          label: 'Hire Me',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'Docs Intro',
              to: '/docs/intro',
            },
            {
              label: 'My Blog',
              href: 'https://shazaaly.substack.com',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/shazaaly/',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Email',
              href: 'mailto:shaza.aly@gmail.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/shazaaly',
            },
            {
              label: 'Upwork',
              href: 'https://www.upwork.com/freelancers/~011e3cb80351dfc57e',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Shaza Aly. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    mermaid: {
      theme: {
        light: 'default',
        dark: 'dark',
      },
      options: {
        startOnLoad: true,
        securityLevel: 'loose',
        theme: 'default',
        flowchart: {
          htmlLabels: true,
        },
      },
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: 'https://shazaaly.substack.com',
            from: ['/blog'],
          },
        ],
      },
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],
};

export default config;

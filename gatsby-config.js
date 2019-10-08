'use strict'

module.exports = {
  siteMetadata: {
    title: 'TinaCMS',
    sidebarTitle: 'TinaCMS',
    description: 'A site editor for the modern web',
    siteUrl: 'https://tinacms.org',
    keywords: 'gatsbyjs, gatsby, react, cms, next',
    author: {
      name: 'Resi Respati',
      url: 'https://resir014.xyz',
      email: 'resi@kata.ai',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://forestry.us20.list-manage.com/subscribe/post?u=ae8b977f987ebf4c64c121d19&amp;id=325dc4b702',
      },
    },
    '@tinacms/gatsby-tinacms-git',
    {
      resolve: '@tinacms/gatsby-plugin-tinacms',
      options: {
        sidebar: {
          position: 'fixed',
          hidden: process.env.NODE_ENV === 'production',
        },
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    '@tinacms/gatsby-tinacms-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 704,
              quality: 90,
              wrapperStyle: 'margin-top: 32px; margin-bottom: 32px;',
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '›',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-autolink-headers',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://tinacms.org',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-netlify',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TinaCMS`,
        short_name: `TinaCMS`,
        start_url: `/`,
        background_color: `#E6FAF8`,
        theme_color: `#EC4815`,
        display: `standalone`,
        icon: `static/img/Favicon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-5SNCV6K',
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
  ],
}

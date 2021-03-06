/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const config = require("./config/site")

module.exports = {
  /* Your site config here */
  siteMetadata: { ...config },
  plugins: [
    `gatsby-plugin-sharp`,
    "gatsby-transformer-sharp",
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `header-autolink`,
            },
          },
        ],
      },
    },
    { resolve: `gatsby-plugin-postcss` },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `types/graphqlTypes.d.ts`,
        codegen: true,
        documentPaths: [
          "./src/**/*.{ts,tsx}",
          //"./.cache/fragments/*.js",
          //"./node_modules/gatsby-*/**/*.js",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        content: [
          require("path").join(
            process.cwd(),
            "src/**/!(*.d).{ts,js,jsx,tsx,md,mdx}"
          ),
        ],
        printRejected: true, // Print removed selectors and processed file names
        develop: false, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        whitelist: ["emoji"], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto:400,700`, `Noto Sans JP:400,700`],
        display: `swap`,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: "gatsby-plugin-webpack-bundle-analyzer",
      options: {
        openAnalyzer: false,
      },
    },
  ],
}

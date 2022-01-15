module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-transformer-sharp`,
    "gatsby-plugin-sass",
    "gatsby-plugin-web-font-loader",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Oooh Baby`,
          `Open Sans\:300,300i,400,400i,500,500i,600,600i,700,700i,800`,
        ],
        display: 'swap'
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};

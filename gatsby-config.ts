const config = {
  siteMetadata: {
    title: `San Lorenzo College of Davao, Inc.`,
    description: `San Lorenzo College of Davao, Inc.`,
    siteUrl: `https://www.slcd.edu.ph`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "48t446o6",
        dataset: "production",
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "TEST",
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "assets/images/logo.png",
        title: "San Lorenzo College of Davao, Inc.",
        name: `San Lorenzo College of Davao, Inc.`,
        short_name: `San Lorenzo College of Davao, Inc.`,
      },
    },
  ],
};

export default config;

import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

import 'bootstrap/dist/css/bootstrap.min.css';


interface Props {
    children: any
}

const PageLayout = ({ children }: Props) => {
  const { site } = useStaticQuery(query)
  
  return (<ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  >
   {children}
    <Helmet>
      <title>{site.siteMetadata.title}</title>
      <meta name="description" content={site.siteMetadata.description} />
      <link rel="stylesheet" href="/assets/css/animate.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&amp;display=swap" rel="stylesheet" />
    </Helmet>
    </ThemeProvider>
  )
}

export default PageLayout

const query = graphql`
  {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet';

interface Props {
    children: any
}

const PageLayout = ({ children }: Props) => {
  const { site } = useStaticQuery(query)
  
  return (<>
   {children}
    <Helmet>
      <title>{site.siteMetadata.title}</title>
      <meta name="description" content={site.siteMetadata.description} />
    </Helmet>
    </>
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
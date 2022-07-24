import * as React from "react"
import type { GatsbyBrowser } from "gatsby"
import PageLayout from './src/layouts/PageLayout'

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element }) => {
  return (
    <PageLayout>
      {element}
    </PageLayout>
  )
}

export const onRouteUpdate: GatsbyBrowser["onRouteUpdate"] = () => {
 
  window.fbAsyncInit = function() {
    FB.init({
      xfbml            : true,
      version          : 'v7.0'
    });
  };

  

}


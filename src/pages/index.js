import * as React from "react"
import Layout from '../components/layout'
import HomeMain from '../components/home-page/home-main'
import Seo from "../components/Seo"




// markup
const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <Seo title='Home' />
      <HomeMain />
    </Layout>
  )
}

export default IndexPage

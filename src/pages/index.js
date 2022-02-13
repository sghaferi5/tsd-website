import * as React from "react"
import Layout from '../components/layout'
import HomeMain from '../components/home-page/home-main'
import Seo from "../components/Seo"




// markup
const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <Seo title='Home'
        description="Are you looking to have dental treatment done asleep or under sedation? Call Toronto Sleep Dentistry and visit one of our sleep dentistry specialists today!" />
      <HomeMain />
    </Layout>
  )
}

export default IndexPage

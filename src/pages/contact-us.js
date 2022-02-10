import * as React from 'react'
import Layout from '../components/layout'
import ContactUsMain from '../components/contact-us/contact-us-main'
import Seo from "../components/Seo"


const ContactUs = () => {
    return (
        <Layout>
            <Seo title='Contact Us' />
            <ContactUsMain />
        </Layout>
    )
}

export default ContactUs
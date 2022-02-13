import * as React from 'react'
import Layout from '../components/layout'
import ContactUsMain from '../components/contact-us/contact-us-main'
import Seo from "../components/Seo"


const ContactUs = () => {
    return (
        <Layout>
            <Seo title='Contact Us'
                description='Toronto Sleep Dentistry - Phone: 416 535 5561 | Email: info@416sleepdentistry.ca | Adress: 1584 Bloor Street W, Toronto, ON M6P 1A7' />
            <ContactUsMain />
        </Layout>
    )
}

export default ContactUs
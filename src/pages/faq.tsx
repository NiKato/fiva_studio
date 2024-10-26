import React from "react"
import FAQ from "../components/FAQ"
import { faqData } from "../constants/faqData"
import Layout from "../components/Layout"
import ContactForm from "../components/ContactForm"

const Faq = () => {
  return (
    <Layout>
      <FAQ isFaqPage props={faqData} />
      <ContactForm showBackground={false} />
    </Layout>
  )
}

export default Faq

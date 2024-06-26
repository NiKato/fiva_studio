import React from "react"
import ContactForm from "../components/ContactForm"
import Layout from "../components/Layout"
import { HeadProps } from "gatsby"
import { SEO } from "../components/Seo"

const Contact = () => {
  return (
    <Layout>
      <ContactForm />
    </Layout>
  )
}

export default Contact

export function Head(props: HeadProps) {
  return (
    <SEO
      title="Fiva Studio | Contact"
      description="Our team will contact you"
    />
  )
}
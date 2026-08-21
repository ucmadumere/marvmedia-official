import React from 'react'
import Breadcrumb from '../components/Breadcrumb';
import FaqSample from '../components/FaqSample';
import ContactInfoSection from '../components/ContactInfoSection'
import ContactFormSection from '../components/ContactFormSection';
import ContactMap from '../components/ContactMap';
import Seo from "../components/Seo";

export default function ContactUs() {
  return (
    <>
    <Seo
      title="Contact Marv Media"
      description="Contact Marv Media to discuss social media management, branding, content creation, digital strategy, or a custom creative project."
      path="/contact-us"
      breadcrumbs={[{ name: "Home", path: "/" }, { name: "Contact Us", path: "/contact-us" }]}
      schema={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Marv Media",
        url: "https://marvmedia.ng/contact-us",
      }}
    />
    <Breadcrumb title="Contact Us" current="Contact Us" />
    <ContactFormSection />
    <ContactInfoSection />
    </>
  )
}

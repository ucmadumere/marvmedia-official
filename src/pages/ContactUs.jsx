import React from 'react'
import Breadcrumb from '../components/Breadcrumb';
import FaqSample from '../components/FaqSample';
import ContactInfoSection from '../components/ContactInfoSection'
import ContactFormSection from '../components/contactFormSection';
import ContactMap from '../components/ContactMap';

export default function ContactUs() {
  return (
    <>
    <Breadcrumb title="Contact Us" current="Contact Us" />
    <ContactFormSection />
    <ContactInfoSection />
    </>
  )
}

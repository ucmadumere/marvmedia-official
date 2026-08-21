import React from 'react'
import Seo from "../components/Seo";
import Breadcrumb from '../components/Breadcrumb';
import FaqMain from '../components/FaqMain';

export default function FAQ() {
    return (
        <>
            <Seo
              title="Frequently Asked Questions"
              description="Find answers about Marv Media's creative services, custom packages, payments, content production, and working with clients worldwide."
              path="/faq"
              breadcrumbs={[{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }]}
            />

            <Breadcrumb title="FAQ" current="FAQ" />

            <FaqMain />
        </>
    )
}

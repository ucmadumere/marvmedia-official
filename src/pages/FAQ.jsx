import React from 'react'
import { Helmet } from 'react-helmet-async';
import Breadcrumb from '../components/Breadcrumb';
import FaqMain from '../components/FaqMain';

export default function FAQ() {
    return (
        <>
            <Helmet>
                <title>Marvmedia | FAQ</title>
                <meta name="description" content="Faq" />
            </Helmet>

            <Breadcrumb title="FAQ" current="FAQ" />

            <FaqMain />
        </>
    )
}

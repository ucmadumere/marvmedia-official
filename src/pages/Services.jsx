import Breadcrumb from "../components/Breadcrumb";
import { Helmet } from "react-helmet-async";
import ServiceGridSection from "../components/ServiceGridSection";
import AutoSlider from "../components/AutoSlider";
import FAQAccordion from "../components/FAQAccordion";
import FaqSample from "../components/FaqSample";

export default function Service() {
    return (
        <>
            <Helmet>
                <title>Marvmedia | Services</title>
                <meta name="description" content="Welcome to MarvMedia's homepage." />
            </Helmet>
            <Breadcrumb title="Our Services" current="Our Services" />

            <ServiceGridSection />
            <AutoSlider />
            <FAQAccordion />
            
        </>
    );
}

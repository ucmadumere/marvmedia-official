import Breadcrumb from "../components/Breadcrumb";
import Seo from "../components/Seo";
import ServiceGridSection from "../components/ServiceGridSection";
import AutoSlider from "../components/AutoSlider";
import FAQAccordion from "../components/FAQAccordion";
import FaqSample from "../components/FaqSample";

export default function Service() {
    return (
        <>
            <Seo
              title="Creative and Digital Marketing Services"
              description="Explore Marv Media's social media management, content production, branding, strategy, and web development services for growing brands."
              path="/services"
              breadcrumbs={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]}
              schema={{
                "@context": "https://schema.org",
                "@type": "ItemList",
                name: "Marv Media Services",
                itemListElement: [],
              }}
            />
            <Breadcrumb title="Our Services" current="Our Services" />

            <ServiceGridSection />
            <AutoSlider />
            <FAQAccordion />
            
        </>
    );
}

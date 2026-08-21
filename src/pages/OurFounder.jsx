import { Link } from "react-router-dom";
import ComingSoon from "../components/ComingSoon";
import Seo from "../components/Seo";
import Breadcrumb from "../components/Breadcrumb";
import CeoSection from "../components/CeoSection";
import CeoHero from "../components/CeoHero";
import CalltoActionDiv from "../components/CalltoActionDiv";

export default function OurFounder() {
  return (
    <>
      <Seo
        title="Marvel Iwezue, Founder of Marv Media"
        description="Meet Marvel Iwezue, creative entrepreneur, project manager, mentor, and founder of Marv Media."
        path="/our-founder"
        image="/assets/images/v3/marvel.webp"
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Our Founder", path: "/our-founder" }]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Marvel Iwezue",
          jobTitle: "Founder of Marv Media",
          image: "https://marvmedia.ng/assets/images/v3/marvel.webp",
        }}
      />

      <Breadcrumb title="The Founder - Marvel Iwezue" current="Our Founder " />
      {/* <CeoHero /> */}
      <CalltoActionDiv />
      <CeoSection />
    </>
  );
}

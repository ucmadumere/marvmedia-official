import { Link } from "react-router-dom";
import ComingSoon from "../components/ComingSoon";
import SeoSection from "../components/SeoSection";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "../components/Breadcrumb";

export default function OurFounder() {
  return (
    <>
      <Helmet>
        <title>Our Founder | MarvMedia</title>
        <meta name="description" content="Meet our founder" />
      </Helmet>

      <Breadcrumb title="Our Founder " current="Our Founder " />
      <SeoSection />
    </>
  );
}

import { Link } from "react-router-dom";
import ComingSoon from "../components/ComingSoon";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "../components/Breadcrumb";
import CeoSection from "../components/CeoSection";
import CeoHero from "../components/CeoHero";
import CalltoActionDiv from "../components/CalltoActionDiv";

export default function OurFounder() {
  return (
    <>
      <Helmet>
        <title>Our Founder | MarvMedia</title>
        <meta name="description" content="Meet our founder" />
      </Helmet>

      <Breadcrumb title="The Founder - Marvel Iwezue" current="Our Founder " />
      {/* <CeoHero /> */}
      <CalltoActionDiv />
      <CeoSection />
    </>
  );
}

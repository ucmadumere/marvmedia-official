import { Link } from "react-router-dom";
import ComingSoon from "../components/ComingSoon";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "../components/Breadcrumb";

export default function LearnWithMarv() {
  return (
    <>
      <Helmet>
        <title>Learn with Marv| MarvMedia</title>
        <meta name="description" content="Marv Design Space" />
      </Helmet>

      <Breadcrumb title="Learn With Marv" current="Learn With Marv" />
      <ComingSoon />
    </>
  );
}

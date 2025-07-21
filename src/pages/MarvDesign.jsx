import { Link } from "react-router-dom";
import ComingSoon from "../components/ComingSoon";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "../components/Breadcrumb";

export default function MarvDesign() {
  return (
    <>
      <Helmet>
        <title>Marv Design Space| MarvMedia</title>
        <meta name="description" content="Marv Design Space" />
      </Helmet>

      <Breadcrumb title="Marv Design Space" current="Marv Design Space " />
      <ComingSoon />
    </>
  );
}

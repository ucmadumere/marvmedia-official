import { Link } from "react-router-dom";
import ComingSoon from "../components/ComingSoon";
import Seo from "../components/Seo";
import Breadcrumb from "../components/Breadcrumb";

export default function MarvDesign() {
  return (
    <>
      <Seo
        title="Marv Design Space"
        description="Discover Marv Design Space, Marv Media's upcoming destination for purposeful visual identities and creative design solutions."
        path="/marv-design"
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Marv Design Space", path: "/marv-design" }]}
      />

      <Breadcrumb title="Marv Design Space" current="Marv Design Space " />
      <ComingSoon />
    </>
  );
}

import { Link } from "react-router-dom";
import ComingSoon from "../components/ComingSoon";
import Seo from "../components/Seo";
import Breadcrumb from "../components/Breadcrumb";

export default function LearnWithMarv() {
  return (
    <>
      <Seo
        title="Learn With Marv"
        description="Explore upcoming practical learning resources and training from Marv Media for creatives, entrepreneurs, and growing brands."
        path="/learn-with-marv"
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Learn With Marv", path: "/learn-with-marv" }]}
      />

      <Breadcrumb title="Learn With Marv" current="Learn With Marv" />
      <ComingSoon />
    </>
  );
}

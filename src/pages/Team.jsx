import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Breadcrumb from "../components/Breadcrumb";
import TeamSlider from "../components/TeamSlider";


export default function Team() {
  return (
    <>
      <Seo
        title="Meet the Marv Media Team"
        description="Meet the strategists, creators, managers, and partners behind Marv Media's creative ideas and visible results."
        path="/team"
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Team", path: "/team" }]}
      />

      <Breadcrumb title="Team" current="Team " />
      <TeamSlider />
    </>
  );
}

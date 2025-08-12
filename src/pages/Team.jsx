import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "../components/Breadcrumb";
import TeamSlider from "../components/TeamSlider";


export default function Team() {
  return (
    <>
      <Helmet>
        <title>Team| MarvMedia</title>
        <meta name="description" content="Team" />
      </Helmet>

      <Breadcrumb title="Team" current="Team " />
      <TeamSlider />
    </>
  );
}

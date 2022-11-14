import React from "react";
import SkelHero from "../component/portfolio/SkelHero";
import SkelOverview from "../component/portfolio/SkelOverview";
import SkelProjectDetails from "../component/portfolio/SkelProjectDetails";

const SkelPortfolio = () => {
  return (
    <>
      <SkelHero />
      <main>
        <SkelOverview />
        <SkelProjectDetails />
      </main>
    </>
  );
};

export default SkelPortfolio;

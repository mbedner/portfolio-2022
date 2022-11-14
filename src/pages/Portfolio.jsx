import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import Hero from "../component/portfolio/Hero";
import Overview from "../component/portfolio/Overview";
import ProjectDetails from "../component/portfolio/ProjectDetails";
import SkelPortfolio from "./SkelPortfolio.jsx";

const Portfolio = () => {
  const [singleProject, setSingleProject] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
      title,
      _id,
      slug,
      projectType,
      toolImages,
      overview,
      overviewImage{
        asset->{
          _id,
          url
        },
        alt
      },
      challenge,
      challengeImage{
        asset->{
          _id,
          url
        },
        alt
      },
      approach,
      approachImage{
        asset->{
          _id,
          url
        },
        alt
      },
      outcome,
      outcomeImage{
        asset->{
          _id,
          url
        },
        alt
      },
    }`
      )
      .then((data) => setSingleProject(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singleProject) return <SkelPortfolio />;

  return (
    <>
      <Hero singleProject={singleProject} />
      <main>
        <Overview singleProject={singleProject} />
        <ProjectDetails singleProject={singleProject} />
      </main>
    </>
  );
};

export default Portfolio;

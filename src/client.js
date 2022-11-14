import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "hy0v7wxi",
  dataset: "production",
  apiVersion: "2022-11-07",
  useCdn: true,
});

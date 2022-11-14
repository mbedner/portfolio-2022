export default {
  title: "Projects",
  name: "projects",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      title: "Project Type",
      name: "projectType",
      type: "string",
      options: {
        list: [
          { value: "WebstaurantStore", title: "WebstaurantStore" },
          { value: "ROAR!", title: "ROAR!" },
          { value: "ChannelMix", title: "ChannelMix" },
          { value: "Personal", title: "Personal" },
        ],
      },
    },
    {
      title: "Tool Images",
      name: "toolImages",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      title: "Overview",
      name: "overview",
      type: "text",
    },
    {
      title: "Overview Image",
      name: "overviewImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Challenge",
      name: "challenge",
      type: "text",
    },
    {
      title: "Challenge Image",
      name: "challengeImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Approach",
      name: "approach",
      type: "text",
    },
    {
      title: "Approach Image",
      name: "approachImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Outcome",
      name: "outcome",
      type: "text",
    },
    {
      title: "Outcome Image",
      name: "outcomeImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};

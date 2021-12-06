import DrupalAttribute from "drupal-attribute";
import { loadFront } from "yaml-front-matter";
import Twig from "twig";
import file from "!!raw-loader!./title.frontmatter.html.twig";
import js from "!!raw-loader!./title.js";
const data = loadFront(file);
const template = Twig.twig({ data: data.__content });
import { useEffect, useState } from "@storybook/client-api";

export default {
  title: `Atoms/Title`,
  argTypes: {
    content: { control: "text" },
    modifier: {
      options: data.variables.modifiers,
      control: { type: "radio" },
    },
    tag: {
      options: data.variables.template_settings.tag.modifiers,
      control: { type: "radio" },
    },
  },
};

const attributes = new DrupalAttribute();
Object.keys(data.variables.attributes).forEach((attribute) => {
  if (attribute === "class") {
    attributes.addClass(data.variables.attributes[attribute]);
  } else {
    attributes.setAttribute(attribute, data.variables.attributes[attribute]);
  }
});

export const basic = (args) => {
  return template.render({
    attributes: attributes
      .removeClass(data.variables.modifiers)
      .addClass(args.modifier),
    content: {
      template_settings: {
        tag: args.tag,
      },
      content: args.content,
    },
  });
};

basic.args = {
  data,
  js,
  content: data.default_content.content.content,
  modifier: data.variables.modifiers[0],
  tag: data.variables.template_settings.tag.modifiers[0],
};

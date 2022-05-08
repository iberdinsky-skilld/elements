import DrupalAttribute from "drupal-attribute";
import { loadFront } from "yaml-front-matter";
import Twig from "twig";
import template from "a_title.html.twig";
import js from "./title.js";
import data from './title.kaizen_component.yml'
const template = Twig.twig({ data: data.__content });


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
  content: data.default_content.content.content,
  modifier: data.variables.modifiers[0],
  tag: data.variables.template_settings.tag.modifiers[0],
};

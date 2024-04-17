import type { Schema, Attribute } from '@strapi/strapi';

export interface ClassClass extends Schema.Component {
  collectionName: 'components_class_classes';
  info: {
    displayName: 'class';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
    icon: Attribute.Media;
    backgroundColour: Attribute.Enumeration<['teal', 'pink', 'cream']>;
  };
}

export interface ClassesClasses extends Schema.Component {
  collectionName: 'components_classes_classes';
  info: {
    displayName: 'classes';
  };
  attributes: {
    class: Attribute.Component<'class.class', true>;
  };
}

export interface ContactContactForm extends Schema.Component {
  collectionName: 'components_contact_contact_forms';
  info: {
    displayName: 'Contact Form';
  };
  attributes: {
    heading: Attribute.String;
    copy: Attribute.Blocks;
    labelValue1: Attribute.String;
    labelValue2: Attribute.String;
    labelValue3: Attribute.String;
    buttonText: Attribute.String;
  };
}

export interface ContentImageGrid extends Schema.Component {
  collectionName: 'components_content_image_grids';
  info: {
    displayName: 'Image grid';
  };
  attributes: {
    images: Attribute.Media;
  };
}

export interface ContentNewsletter extends Schema.Component {
  collectionName: 'components_content_newsletters';
  info: {
    displayName: 'Newsletter';
  };
  attributes: {
    heading: Attribute.String;
    copy: Attribute.Blocks;
    buttonText: Attribute.String;
    placeholderInput1: Attribute.String;
    placeholderInput2: Attribute.String;
  };
}

export interface ContentTextAndImageBlock extends Schema.Component {
  collectionName: 'components_content_text_and_image_blocks';
  info: {
    displayName: 'Text and Image Block';
    description: '';
  };
  attributes: {
    copy: Attribute.Blocks;
    image: Attribute.Media;
  };
}

export interface CssCssVariable extends Schema.Component {
  collectionName: 'components_css_css_variables';
  info: {
    displayName: 'CSS Variable';
  };
  attributes: {
    variableName: Attribute.String;
    variableValue: Attribute.String;
  };
}

export interface HeroHero extends Schema.Component {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    image: Attribute.Media;
    description: Attribute.Text;
    price: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'class.class': ClassClass;
      'classes.classes': ClassesClasses;
      'contact.contact-form': ContactContactForm;
      'content.image-grid': ContentImageGrid;
      'content.newsletter': ContentNewsletter;
      'content.text-and-image-block': ContentTextAndImageBlock;
      'css.css-variable': CssCssVariable;
      'hero.hero': HeroHero;
    }
  }
}

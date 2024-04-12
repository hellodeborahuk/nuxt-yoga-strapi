import type { Schema, Attribute } from '@strapi/strapi';

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
      'hero.hero': HeroHero;
    }
  }
}

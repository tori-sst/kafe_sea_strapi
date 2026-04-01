import type { Schema, Struct } from '@strapi/strapi';

export interface HomePageHomeConclucion extends Struct.ComponentSchema {
  collectionName: 'components_home_page_home_conclucions';
  info: {
    displayName: 'HomeConclucion';
  };
  attributes: {
    concl1: Schema.Attribute.Text;
    concl2: Schema.Attribute.Text;
  };
}

export interface HomePageHomeText extends Struct.ComponentSchema {
  collectionName: 'components_home_page_home_texts';
  info: {
    displayName: 'HomeText';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
  };
}

export interface MenuIngredient extends Struct.ComponentSchema {
  collectionName: 'components_menu_ingredients';
  info: {
    displayName: 'ingredient';
    icon: 'seed';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home-page.home-conclucion': HomePageHomeConclucion;
      'home-page.home-text': HomePageHomeText;
      'menu.ingredient': MenuIngredient;
    }
  }
}

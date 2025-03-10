import type { Schema, Struct } from '@strapi/strapi';

export interface HeroSlideHeroSlide extends Struct.ComponentSchema {
  collectionName: 'components_hero_slide_hero_slides';
  info: {
    displayName: 'HeroSlide';
    icon: 'chartBubble';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
  };
}

export interface ServicesComponentServicesComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_services_component_services_components';
  info: {
    description: '';
    displayName: 'Services-Component';
    icon: 'stack';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 5;
      }>;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
  };
}

export interface ValuesValues extends Struct.ComponentSchema {
  collectionName: 'components_values_values';
  info: {
    displayName: 'Values';
    icon: 'star';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'hero-slide.hero-slide': HeroSlideHeroSlide;
      'services-component.services-component': ServicesComponentServicesComponent;
      'values.values': ValuesValues;
    }
  }
}

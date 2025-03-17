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

export interface SocialLinksSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_social_links_social_links';
  info: {
    displayName: 'Social_links';
  };
  attributes: {
    email: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    linkedin: Schema.Attribute.String;
    telegram: Schema.Attribute.String;
    tiktok: Schema.Attribute.String;
  };
}

export interface ValuesValues extends Struct.ComponentSchema {
  collectionName: 'components_values_values';
  info: {
    description: '';
    displayName: 'Values';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Text &
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'hero-slide.hero-slide': HeroSlideHeroSlide;
      'services-component.services-component': ServicesComponentServicesComponent;
      'social-links.social-links': SocialLinksSocialLinks;
      'values.values': ValuesValues;
    }
  }
}

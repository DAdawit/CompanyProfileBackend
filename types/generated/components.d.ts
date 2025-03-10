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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'hero-slide.hero-slide': HeroSlideHeroSlide;
    }
  }
}

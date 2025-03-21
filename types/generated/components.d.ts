import type { Schema, Struct } from '@strapi/strapi';

export interface FaQsFaQs extends Struct.ComponentSchema {
  collectionName: 'components_fa_qs_fa_qs';
  info: {
    displayName: 'FAQs';
    icon: 'user';
  };
  attributes: {
    answer: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 5;
      }>;
    question: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
  };
}

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

export interface ImportantStatsImportantStats extends Struct.ComponentSchema {
  collectionName: 'components_important_stats_important_stats';
  info: {
    displayName: 'ImportantStats';
    icon: 'stack';
  };
  attributes: {
    amount: Schema.Attribute.Integer & Schema.Attribute.Required;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
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

export interface TimelineEventTimelineEvent extends Struct.ComponentSchema {
  collectionName: 'components_timeline_event_timeline_events';
  info: {
    description: '';
    displayName: 'timelineEvent';
  };
  attributes: {
    date_of_event: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    event: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
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
      'fa-qs.fa-qs': FaQsFaQs;
      'hero-slide.hero-slide': HeroSlideHeroSlide;
      'important-stats.important-stats': ImportantStatsImportantStats;
      'services-component.services-component': ServicesComponentServicesComponent;
      'social-links.social-links': SocialLinksSocialLinks;
      'timeline-event.timeline-event': TimelineEventTimelineEvent;
      'values.values': ValuesValues;
    }
  }
}

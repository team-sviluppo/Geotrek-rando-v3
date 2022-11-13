export interface WelcomeBannerList {
  [language: 'default' | string]: string[];
}

interface ActivityBar {
  shouldDisplay: boolean;
}

interface WelcomeBanner {
  videoUrl?: string;
  carouselUrls?: WelcomeBannerList;
  pictureUrl?: string;
  shouldDisplayText: boolean;
}

export interface Suggestion {
  titleTranslationId: string;
  iconUrl: string;
  ids: string[];
  type: 'trek' | 'service' | 'outdoor' | 'events';
}

/** @deprecated since 3.9.1 version */
export type DeprecatedSuggestionList = Array<Suggestion>;

export interface SuggestionList {
  [language: 'default' | string]: Suggestion[];
}

export interface HomePageConfig {
  welcomeBanner: WelcomeBanner;
  activityBar: ActivityBar;
  carouselUrls: WelcomeBannerList;
  suggestions: Suggestion[];
}

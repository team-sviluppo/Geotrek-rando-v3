import getNextConfig from 'next/config';
import { HomePageConfig, Suggestion, SuggestionList, WelcomeBannerList } from './interface';

export const getHomePageConfig = (): HomePageConfig => {
  const {
    publicRuntimeConfig: { home },
  } = getNextConfig();
  return home;
};

export const adaptWelcomeBanner = (
  wbanners: string[] | WelcomeBannerList,
  language: string,
): string[] | null => {

  if (Array.isArray(wbanners)) {
    return wbanners;
  }

  if (language in wbanners) {
    return wbanners[language];
  }

  return wbanners.default ?? null;
};

export const adaptSuggestions = (
  suggestions: any | SuggestionList,
  language: string,
): Suggestion[] | null => {
  //  Backward compatibility with versions prior to 3.9.1
  if (Array.isArray(suggestions)) {
    return suggestions;
  }

  if (language in suggestions) {
    return suggestions[language];
  }

  return suggestions.default ?? null;
};

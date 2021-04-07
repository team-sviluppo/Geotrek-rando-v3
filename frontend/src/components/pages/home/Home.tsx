import { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import parse from 'html-react-parser';

import homeTopHtml from 'customization/html/homeTop.html';
import homeBottomHtml from 'customization/html/homeBottom.html';

import { Layout } from 'components/Layout/Layout';
import { ActivitySearchFilter } from 'components/ActivitySearchFilter';
import { PageHead } from 'components/PageHead';
import { Footer } from 'components/Footer';
import { HomeSection } from './components/HomeSection';
import { HomeContainer } from './Home.style';
import { useHome } from './useHome';
import { BannerSection } from './components/BannerSection';
import { BannerType } from './components/BannerSection/BannerSection';

const HomeUI: FunctionComponent = () => {
  const { config, activitySuggestionCategories } = useHome();

  const contentContainerClassname = `relative ${
    config.activityBar.shouldDisplay ? '-top-6 desktop:-top-15' : 'pt-6 desktop:pt-18'
  }`;

  const getBannerType = (): BannerType => {
    if (config.welcomeBanner.videoUrl !== null && config.welcomeBanner.videoUrl !== undefined) {
      return 'video';
    }
    if (config.welcomeBanner.picturesUrl.length > 1) {
      return 'carousel';
    }
    return 'image';
  };

  const intl = useIntl();
  return (
    <div className="h-full">
      <PageHead
        title={intl.formatMessage({ id: 'home.title' })}
        description={intl.formatMessage({ id: 'home.description' })}
      />
      <Layout>
        <HomeContainer>
          <BannerSection
            shouldDisplayText={config.welcomeBanner.shouldDisplayText}
            backgroundSourceUrl={config.welcomeBanner.videoUrl ?? config.welcomeBanner.picturesUrl}
            type={getBannerType()}
          />
          <div className={contentContainerClassname}>
            {config.activityBar.shouldDisplay && (
              <div
                className={`desktop:flex desktop:justify-center ${classNameHomeChild}`}
                id="activities_bar"
              >
                <ActivitySearchFilter />
              </div>
            )}
            <div className={classNameHomeChild}>{parse(homeTopHtml)}</div>
            {activitySuggestionCategories.map(suggestionCategory => (
              <HomeSection
                title={intl.formatMessage({ id: suggestionCategory.titleTranslationId })}
                iconUrl={suggestionCategory.iconUrl}
                key={suggestionCategory.titleTranslationId}
                activitySuggestions={suggestionCategory.suggestions}
              />
            ))}
            <div className={classNameHomeChild}>{parse(homeBottomHtml)}</div>
          </div>
        </HomeContainer>
        <Footer />
      </Layout>
    </div>
  );
};

const classNameHomeChild = 'mx-4 desktop:mx-10percent mb-6 desktop:mb-18';

export const Home = HomeUI;

import { ActivitySearchFilter } from 'components/ActivitySearchFilter';
import { Footer } from 'components/Footer';
import { Layout } from 'components/Layout/Layout';
import { PageHead } from 'components/PageHead';
import parse from 'html-react-parser';
import getNextConfig from 'next/config';
import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { SearchMapDynamicComponent } from 'components/Map';
import { useMediaPredicate } from 'react-media-hook';
import { useListAndMapContext } from 'modules/map/ListAndMapContext';
import { BannerWithAsset } from './components/BannerWithAsset';
import { HomeSection } from './components/HomeSection';
import { HomeContainer } from './Home.style';
import { useHome } from './useHome';

import { useFilter } from '../search/components/useFilters';
import { useDateFilter } from '../search/hooks/useDateFilter';
import { useMapResults } from '../search/hooks/useMapResults';
import { useTextFilter } from '../search/hooks/useTextFilter';

const {
  publicRuntimeConfig: { homeBottomHtml, homeTopHtml },
} = getNextConfig();

// Beware fellow reader:
// This map was extracted from `components/pages/search/Search.tsx`.
// It is meant to be the same map displayed in the search page when no filter
// is specified.
const HomeMap: React.FC<{ language: string }> = ({ language }) => {
  const { filtersState } = useFilter();
  const { dateFilter } = useDateFilter();
  const { textFilterState } = useTextFilter();
  const isMobile = useMediaPredicate('(max-width: 1024px)');

  const { isMapLoading, mapResults } = useMapResults(
    { filtersState, textFilterState, dateFilter },
    language,
  );

  const { setPoints } = useListAndMapContext();

  useEffect(() => {
    if (mapResults) setPoints(mapResults);
  }, [mapResults]);

  return (
    <>
      {isMapLoading && (
        <div className="absolute bg-primary2 opacity-40 w-full h-full" style={{ zIndex: 2000 }} />
      )}
      {!isMapLoading && (
        <SearchMapDynamicComponent
          type={isMobile ? 'MOBILE' : 'DESKTOP'}
          shouldUseClusters
          shouldUsePopups
        />
      )}
    </>
  );
};

const HomeUI: React.FC<{ language: string }> = ({ language }) => {
  const { config, suggestions, welcomeBanners } = useHome();

  const contentContainerClassname = `relative ${
    config.activityBar.shouldDisplay ? '-top-6 desktop:-top-15' : 'pt-6 desktop:pt-18'
  }`;

  const intl = useIntl();

  const homeTop = homeTopHtml[intl.locale] ?? homeTopHtml.default;
  const homeBottom = homeBottomHtml[intl.locale] ?? homeBottomHtml.default;

  return (
    <>
      <PageHead
        title={intl.formatMessage({ id: 'home.title' })}
        description={intl.formatMessage({ id: 'home.description' })}
      />
      <Layout>
        <HomeContainer id="home_container">
          <BannerWithAsset
            shouldDisplayText={config.welcomeBanner.shouldDisplayText}
            carouselUrls={welcomeBanners}
            pictureUrl={config.welcomeBanner.pictureUrl}
            videoUrl={config.welcomeBanner.videoUrl}
          />
          <div id="home_content" className={contentContainerClassname}>
            {config.activityBar.shouldDisplay && (
              <div
                className={`desktop:flex desktop:justify-center ${classNameHomeChild}`}
                id="home_activitiesBar"
              >
                <ActivitySearchFilter />
              </div>
            )}

            {homeTop !== undefined && (
              <div id="home_topHtml" className={classNameHomeChild}>
                {parse(homeTop, {
                  // Due to the library holding the wrong typings, unknown has
                  // been added here.
                  // The below block replaces the html element(s) with class `replace-with-map`
                  // with the HomeMap instance.
                  replace: (dN: unknown) => {
                    const domNode = dN as any;
                    if (domNode.attribs && domNode.attribs.class === 'replace-with-map') {
                      return <HomeMap language={language} />;
                    }
                  },
                })}
              </div>
            )}

            <div className="home-map">
              <div className="left-home-map">
                {suggestions
                  .filter(({ results }) => results.length > 0)
                  .map(({ titleTranslationId, iconUrl, results, type }) => (
                    <HomeSection
                      title={intl.formatMessage({ id: titleTranslationId })}
                      iconUrl={iconUrl}
                      key={titleTranslationId}
                      results={results}
                      type={type}
                    />
                  ))}
              </div>

              {/* <div className="right-home-map">
                {config.map.searchHome === true ? (
                  <div style={{ width: '100%', height: '400px' }}>
                    <SearchMapDynamicComponent
                      type={isMobile ? 'MOBILE' : 'DESKTOP'}
                      shouldUseClusters
                      shouldUsePopups
                    />
                  </div>
                ) : null}
              </div> */}
            </div>

            {homeBottom !== undefined && (
              <div id="home_bottomHtml" className={classNameHomeChild}>
                {parse(homeBottom)}
              </div>
            )}
          </div>
        </HomeContainer>
        <Footer />
      </Layout>
    </>
  );
};

const classNameHomeChild = 'mx-4 desktop:mx-10percent mb-6 desktop:mb-18';

export const Home = HomeUI;

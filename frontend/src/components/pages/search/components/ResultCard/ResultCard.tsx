import React from 'react';
import styled, { css } from 'styled-components';
import { FormattedMessage } from 'react-intl';

import {
  borderRadius,
  colorPalette,
  desktopOnly,
  getSpacing,
  shadow,
  typography,
} from 'stylesheet';
import { flexGap } from 'services/cssHelpers';

import { Chip } from 'components/Chip';
import { Button } from 'components/Button';
import { Link } from 'components/Link';
import { LocalIconInformation, RemoteIconInformation } from 'components/Information';

import { Clock } from 'components/Icons/Clock';
import { CodeBrackets } from 'components/Icons/CodeBrackets';
import { TrendingUp } from 'components/Icons/TrendingUp';

import { ActivityBadge as RawActivityBadge } from './ActivityBadge';

interface Props {
  id: number;
  place: string;
  title: string;
  tags: string[];
  thumbnailUri: string;
  badgeIconUri: string;
  className?: string;
  informations: {
    duration: string | null;
    distance: string;
    elevation: string;
    difficulty: { label: string; pictogramUri: string } | null;
    reservationSystem: number | null;
  };
  redirectionUrl: string;
}

export const ResultCard: React.FC<Props> = ({
  id,
  place,
  title,
  tags,
  thumbnailUri,
  badgeIconUri,
  informations,
  className,
  redirectionUrl,
}) => {
  return (
    <Container className={className}>
      <ImageContainer imageUri={thumbnailUri}>
        <ActivityBadge iconUri={badgeIconUri} />
      </ImageContainer>

      <Link href={redirectionUrl} testId={`Link-ResultCard-${id}`} className="w-full">
        <DetailsContainer>
          <DetailsLayout>
            <Place>{place}</Place>

            <Title>{title}</Title>

            <TagContainer>
              <TagLayout>
                {tags.map(tag => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </TagLayout>
            </TagContainer>

            <InformationContainer>
              <InformationLayout>
                {informations.difficulty !== null && (
                  <RemoteIconInformation iconUri={informations.difficulty.pictogramUri}>
                    {informations.difficulty.label}
                  </RemoteIconInformation>
                )}
                {informations.duration !== null && (
                  <LocalIconInformation icon={Clock}>{informations.duration}</LocalIconInformation>
                )}
                <LocalIconInformation icon={CodeBrackets}>
                  {informations.distance}
                </LocalIconInformation>
                <LocalIconInformation icon={TrendingUp} className="desktop:flex hidden">
                  {informations.elevation}
                </LocalIconInformation>
              </InformationLayout>
            </InformationContainer>
          </DetailsLayout>

          {informations.reservationSystem !== null && (
            <BookingButtonContainer>
              <Button>
                <FormattedMessage id="search.book" />
              </Button>
            </BookingButtonContainer>
          )}
        </DetailsContainer>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: none;
  flex-direction: column;
  cursor: pointer;
  &:hover {
    box-shadow: ${shadow.small};
  }
  border-radius: ${borderRadius.card};
  overflow: hidden;

  ${desktopOnly(
    css`
      width: 100%;
      flex-direction: row;
    `,
  )}
`;

const ImageContainer = styled.div<{ imageUri: string }>`
  height: ${getSpacing(31)};
  width: 100%;

  background-image: url(${({ imageUri }) => imageUri});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: black;

  position: relative;

  ${desktopOnly(
    css`
      height: auto;
      max-width: ${getSpacing(56)};
    `,
  )}
`;

const DetailsContainer = styled.div`
  display: flex;
  width: 100%;

  padding: ${getSpacing(4)};

  border: 1px solid ${colorPalette.greySoft};
  border-top: none;
  border-radius: 0 0 ${borderRadius.card} ${borderRadius.card};

  ${desktopOnly(
    css`
      padding: ${getSpacing(6)};

      border: 1px solid ${colorPalette.greySoft};
      border-left: none;
      border-radius: 0 ${borderRadius.card} ${borderRadius.card} 0;
    `,
  )}
`;

const DetailsLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: ${getSpacing(50)};
  ${desktopOnly(css`
    width: 100%;
  `)}
`;

const BookingButtonContainer = styled.div`
  margin-left: ${getSpacing(4)};
  display: none;

  ${desktopOnly(
    css`
      display: block;
    `,
  )}
`;

const Place = styled.span`
  ${typography.small}
`;

const Title = styled.span`
  margin-top: ${getSpacing(1)};

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  ${typography.h1}
  color: ${colorPalette.primary1};

  ${desktopOnly(
    css`
      text-overflow: clip;
      white-space: normal;
    `,
  )}
`;

const TagContainer = styled.div`
  display: flex;
  margin-top: ${getSpacing(2)};

  ${desktopOnly(
    css`
      margin-top: ${getSpacing(4)};
    `,
  )}
`;

const TagLayout = styled.div`
  ${flexGap(getSpacing(2))}

  ${desktopOnly(
    css`
      ${flexGap(getSpacing(4))}
    `,
  )}
`;

const InformationContainer = styled.div`
  margin-top: ${getSpacing(4)};
`;

const InformationLayout = styled.div`
  ${flexGap(getSpacing(4))}
`;

const ActivityBadge = styled(RawActivityBadge)`
  position: absolute;
  top: ${getSpacing(4)};
  left: ${getSpacing(4)};
`;

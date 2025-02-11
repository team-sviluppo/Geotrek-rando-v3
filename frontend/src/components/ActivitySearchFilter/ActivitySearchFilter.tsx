import { ChevronDown } from 'components/Icons/ChevronDown';
import { MoreHorizontal } from 'components/Icons/MoreHorizontal';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { routes } from 'services/routes';
import { ActivityFilter } from 'modules/activities/interface';
import { CATEGORY_ID, EVENT_ID, OUTDOOR_ID, PRACTICE_ID } from 'modules/filters/constant';

import { ActivityButton } from './ActivityButton';
import { useActivitySearchFilter } from './useActivitySearchFilter';
import { ActivitySearchFilterMobile } from './ActivitySearchFilterMobile';

interface Props {
  className?: string;
}

const MAX_VISIBLE_ACTIVITIES = 8;

export const ActivitySearchFilter: React.FC<Props> = ({ className }) => {
  const { activities, expandedState, toggleExpandedState } = useActivitySearchFilter();

  const collapseIsNeeded: boolean =
    activities !== undefined && activities.length > MAX_VISIBLE_ACTIVITIES;

  const visibleActivities: ActivityFilter[] | undefined =
    activities !== undefined
      ? collapseIsNeeded && expandedState === 'COLLAPSED'
        ? activities.slice(0, MAX_VISIBLE_ACTIVITIES)
        : activities
      : undefined;

  const getId = (type: string) => {
    if (type === 'PRACTICE') return PRACTICE_ID;
    if (type === 'OUTDOOR_PRACTICE') return OUTDOOR_ID;
    if (type === 'TOURISTIC_EVENT_TYPE') return EVENT_ID;

    return CATEGORY_ID;
  };

  return (
    <div>
      {activities !== undefined && (
        <>
          <div
            className={`px-3 pb-6 bg-white shadow-lg rounded-2xl hidden self-center max-w-activitySearchFilter desktop:flex${
              className ?? ''
            }`}
          >
            <div className="flex content-evenly flex-wrap flex-1 items-center">
              {visibleActivities?.map(activity => (
                <ActivityButton
                  iconUrl={activity.pictogram}
                  href={`${routes.SEARCH}?${getId(activity.type)}=${activity.id}`}
                  key={`${activity.type}-${activity.id}`}
                  label={activity.name}
                />
              ))}
            </div>
            {collapseIsNeeded && (
              <div className="self-end cursor-pointer" onClick={toggleExpandedState}>
                <ControlCollapseButton expandedState={expandedState} />
              </div>
            )}
          </div>
          <div className="block desktop:hidden">
            <ActivitySearchFilterMobile activities={activities ?? []} getId={getId} />
          </div>
        </>
      )}
    </div>
  );
};

const ControlCollapseButton: React.FC<{ expandedState: 'EXPANDED' | 'COLLAPSED' }> = ({
  expandedState,
}) => {
  if (expandedState === 'EXPANDED') {
    return <ChevronDown size={48} className="transform rotate-180" />;
  }
  return (
    <div className="flex flex-col items-center mr-4 text-P2">
      <MoreHorizontal size={48} />
      <FormattedMessage id="home.seeMore" />
    </div>
  );
};

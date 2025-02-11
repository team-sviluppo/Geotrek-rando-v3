import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { colorPalette, typography } from 'stylesheet';
import { buttonCssResets } from 'services/cssHelpers';

import { Filter } from 'components/Icons/Filter';
import { NumberBadge } from '../NumberBadge';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  numberSelected: number;
}

export const ToggleFilterButton: React.FC<Props> = ({ numberSelected, ...nativeButtonProps }) => {
  return (
    <Button className="flex items-center desktop:hidden" {...nativeButtonProps}>
      {numberSelected === 0 ? (
        <Filter size={16} className="mr-2" />
      ) : (
        <NumberBadge className="mr-1">{numberSelected}</NumberBadge>
      )}
      <FilterText className="ml-1">
        <FormattedMessage id="search.filter" />
      </FilterText>
    </Button>
  );
};

const Button = styled.button`
  ${buttonCssResets}
  color: ${colorPalette.primary1};
`;

const FilterText = styled.span`
  ${typography.main};
  ${typography.bold};
  color: ${colorPalette.primary1};
`;

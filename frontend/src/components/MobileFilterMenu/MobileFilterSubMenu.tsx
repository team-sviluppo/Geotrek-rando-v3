import { LeftArrow } from 'components/Icons/LeftArrow';
import { FilterState, Option } from 'modules/filters/interface';
import React from 'react';
import { slide as Slide } from 'react-burger-menu';
import { useIntl } from 'react-intl';

import { CloseButton } from './CloseButton';

interface Props {
  menuState: 'DISPLAYED' | 'HIDDEN';
  handleClose: () => void;
  filterId: string | null;
  closeMenu: () => void;
  filterState: FilterState | null;
  selectOption: (option: Option) => void;
  deSelectOption: (option: Option) => void;
}

export const MobileFilterSubMenu: React.FC<Props> = ({
  menuState,
  handleClose,
  closeMenu,
  filterId,
  filterState,
  selectOption,
  deSelectOption,
}) => {
  const intl = useIntl();
  const selectedOptionsValue = filterState?.selectedOptions.map(({ value }) => value);
  const isOptionSelected = (option: Option) =>
    selectedOptionsValue ? selectedOptionsValue.includes(option.value) : false;
  return (
    /*
     * The library default behaviour is to have a fixed close icon which
     * made the icon overlap with the menu content as we scrolled.
     * To fix this issue we use our own close button which scrolls along
     * the content and imperatively closes the drawer.
     */
    <Slide
      isOpen={menuState === 'DISPLAYED'}
      onClose={handleClose}
      right
      customBurgerIcon={false}
      customCrossIcon={false}
      burgerBarClassName="bg-white"
      menuClassName="bg-white p-4"
    >
      <div className="relative text-center w-full pb-4 font-bold border-b border-solid border-greySoft outline-none">
        <CloseButton
          onClick={closeMenu}
          className="absolute left-0"
          icon={<LeftArrow size={24} />}
        />
        {filterId !== null && (
          <span>{intl.formatMessage({ id: `search.filters.${filterId}` })}</span>
        )}
      </div>
      {filterState?.options.map(option => (
        <span
          key={option.value}
          className="flex items-center pt-4 pb-4 font-bold outline-none border-b pb-2 border-solid border-greySoft"
          onClick={() => (isOptionSelected(option) ? deSelectOption(option) : selectOption(option))}
        >
          {option.label}
        </span>
      ))}
    </Slide>
  );
};

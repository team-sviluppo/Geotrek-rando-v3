import { getFlatPages } from 'modules/flatpage/connector';
import { MenuItem } from 'modules/header/interface';
import { getDefaultLanguage, getHeaderConfig } from 'modules/header/utills';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { useQuery } from 'react-query';

export const useHeader = () => {
  const config = getHeaderConfig();
  const language = useRouter().locale ?? getDefaultLanguage();
  const { data } = useQuery<MenuItem[], Error>(['header', language], () => getFlatPages(language));
  const intl = useIntl();

  // Feat: items mentioned in `hideMenuItems` will be hidden.
  const itemIdsToHide = useMemo(() => config?.menu.hideMenuItems?.map(v => v.id) ?? [], [config]);
  const menuItems = useMemo(() => {
    return data?.filter(v => !itemIdsToHide.includes(v.id));
  }, [data, itemIdsToHide]);

  return { config, intl, menuItems };
};

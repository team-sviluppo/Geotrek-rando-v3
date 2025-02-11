import { GeometryObject } from 'modules/interface';
import { adaptGeometry } from 'modules/utils/geometry';
import { getCities } from '../city/connector';
import { getThemes } from '../filters/theme/connector';
import { getSources } from '../source/connector';
import { getTouristicContentsNearTarget } from '../touristicContent/connector';
import { getTouristicEventTypes } from '../touristicEventType/connector';
import { PopupResult } from '../trekResult/interface';
import {
  adaptTouristicEventDetails,
  adaptTouristicEventPopupResults,
  adaptTouristicEvents,
} from './adapter';
import { fetchTouristicEventDetails, fetchTouristicEventResult, fetchTouristicEvents } from './api';
import { TouristicEvent, TouristicEventDetails } from './interface';

export const getTouristicEvents = async (
  language: string,
  query = {},
): Promise<TouristicEvent[]> => {
  const [rawTouristicEventResult, themeDictionnary, cityDictionnary, touristicEventType] =
    await Promise.all([
      fetchTouristicEvents({ ...query, language }),
      getThemes(language),
      getCities(language),
      getTouristicEventTypes(language),
    ]);

  return adaptTouristicEvents({
    rawTouristicEvents: rawTouristicEventResult.results,
    themeDictionnary,
    cityDictionnary,
    touristicEventType,
  });
};

export const getTouristicEventDetails = async (
  id: string,
  language: string,
): Promise<TouristicEventDetails> => {
  try {
    const [
      rawTouristicEventDetails,
      themeDictionnary,
      cityDictionnary,
      touristicContents,
      sourcesDictionnary,
      touristicEventType,
    ] = await Promise.all([
      fetchTouristicEventDetails({ language }, id),
      getThemes(language),
      getCities(language),
      getTouristicContentsNearTarget(Number(id), language, 'near_touristicevent'),
      getSources(language),
      getTouristicEventTypes(language),
    ]);

    return adaptTouristicEventDetails({
      rawTouristicEventDetails,
      themeDictionnary,
      cityDictionnary,
      touristicContents,
      sourcesDictionnary,
      touristicEventType,
    });
  } catch (e) {
    console.error('Error in outdoor course connector', e);
    throw e;
  }
};

export const getTouristicEventPopupResult = async (
  id: string,
  language: string,
): Promise<PopupResult> => {
  const rawTouristicEventPopupResult = await fetchTouristicEventDetails({ language }, id);

  const [cityDictionnary] = await Promise.all([getCities(language)]);

  return adaptTouristicEventPopupResults({ rawTouristicEventPopupResult, cityDictionnary });
};

export const getTouristicEventGeometryResult = async (
  id: string,
  language: string,
): Promise<GeometryObject> => {
  const rawTouristicEventGeometryResult = await fetchTouristicEventResult({ language }, id);
  return adaptGeometry(rawTouristicEventGeometryResult.geometry);
};

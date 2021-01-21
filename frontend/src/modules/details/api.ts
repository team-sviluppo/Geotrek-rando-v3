import { GeotrekAPI } from 'services/api/client';
import { APIQuery } from 'services/api/interface';
import { RawDetails } from './interface';

const fieldsParams = {
  fields:
    'name,departure,thumbnail,practice,public_transport,access,advised_parking,description_teaser,ambiance,themes,duration,length_2d,ascent,difficulty,route',
};

export const fetchDetails = (query: APIQuery, id: string): Promise<RawDetails> =>
  GeotrekAPI.url(`/trek/${id}/`)
    .query({ ...query, ...fieldsParams })
    .get()
    .json();
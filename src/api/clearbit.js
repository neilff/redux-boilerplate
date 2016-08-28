import { get } from './utils/fetchr';

export function searchAutocomplete(query) {
  return get(`https://autocomplete.clearbit.com/v1/companies/suggest?query=${ query }`);
}

import { DropdownOptions } from '../components';
import { useMemo } from 'react';
import { Country, State, City, ICountry, IState, ICity } from 'country-state-city';


const countryIsAvailable = (country: ICountry) => State.getStatesOfCountry(country.isoCode).length > 0;
const mapCountryToSelectOption = (country: ICountry): DropdownOptions => ({
  label: country.name,
  value: country.isoCode || country.name || '',
});
export const useCountryOptions = () => {
  return useMemo<DropdownOptions[]>(() => {
    return Country.getAllCountries()
      .filter(countryIsAvailable)
      .map(mapCountryToSelectOption);
  }, []);
};
const mapStateToSelectOption = (state: IState): DropdownOptions => ({
  label: state.name,
  value: state.isoCode || state.name || '',
});
export const useStateOptions = (countryCode?:string) => {
  return useMemo<DropdownOptions[]>(() => {
    if (!countryCode) return [];
    try {
      return State.getStatesOfCountry(countryCode)
        .map(mapStateToSelectOption);
    } catch (e) {
      return [];
    }
  }, [countryCode]);
};

const mapCityToSelectOption = (city: ICity): DropdownOptions => ({
  label: city.name,
  value: city.name || '',
});
export const useCityOptions = (countryCode?:string, stateCode?:string) => {
  return useMemo<DropdownOptions[]>(() => {
    if (!countryCode || !stateCode) return [];
    try {
      return City.getCitiesOfState(countryCode, stateCode)
        .map(mapCityToSelectOption);
    } catch (e) {
      return [];
    }
  }, [countryCode, stateCode]);
};

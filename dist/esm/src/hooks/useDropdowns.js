import { useMemo } from 'react';
import Country from '../../node_modules/country-state-city/lib/country.js';
import State from '../../node_modules/country-state-city/lib/state.js';
import City from '../../node_modules/country-state-city/lib/city.js';

const countryIsAvailable = (country) => State.getStatesOfCountry(country.isoCode).length > 0;
const mapCountryToSelectOption = (country) => ({
    label: country.name,
    value: country.isoCode || country.name || '',
});
const useCountryOptions = () => {
    return useMemo(() => {
        return Country.getAllCountries()
            .filter(countryIsAvailable)
            .map(mapCountryToSelectOption);
    }, []);
};
const mapStateToSelectOption = (state) => ({
    label: state.name,
    value: state.isoCode || state.name || '',
});
const useStateOptions = (countryCode) => {
    return useMemo(() => {
        if (!countryCode)
            return [];
        try {
            return State.getStatesOfCountry(countryCode)
                .map(mapStateToSelectOption);
        }
        catch (e) {
            return [];
        }
    }, [countryCode]);
};
const mapCityToSelectOption = (city) => ({
    label: city.name,
    value: city.name || '',
});
const useCityOptions = (countryCode, stateCode) => {
    return useMemo(() => {
        if (!countryCode || !stateCode)
            return [];
        try {
            return City.getCitiesOfState(countryCode, stateCode)
                .map(mapCityToSelectOption);
        }
        catch (e) {
            return [];
        }
    }, [countryCode, stateCode]);
};

export { useCityOptions, useCountryOptions, useStateOptions };
//# sourceMappingURL=useDropdowns.js.map

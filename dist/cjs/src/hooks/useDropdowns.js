'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var country = require('../../node_modules/country-state-city/lib/country.js');
var state = require('../../node_modules/country-state-city/lib/state.js');
var city = require('../../node_modules/country-state-city/lib/city.js');

const countryIsAvailable = (country) => state["default"].getStatesOfCountry(country.isoCode).length > 0;
const mapCountryToSelectOption = (country) => ({
    label: country.name,
    value: country.isoCode || country.name || '',
});
const useCountryOptions = () => {
    return React.useMemo(() => {
        return country["default"].getAllCountries()
            .filter(countryIsAvailable)
            .map(mapCountryToSelectOption);
    }, []);
};
const mapStateToSelectOption = (state) => ({
    label: state.name,
    value: state.isoCode || state.name || '',
});
const useStateOptions = (countryCode) => {
    return React.useMemo(() => {
        if (!countryCode)
            return [];
        try {
            return state["default"].getStatesOfCountry(countryCode)
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
    return React.useMemo(() => {
        if (!countryCode || !stateCode)
            return [];
        try {
            return city["default"].getCitiesOfState(countryCode, stateCode)
                .map(mapCityToSelectOption);
        }
        catch (e) {
            return [];
        }
    }, [countryCode, stateCode]);
};

exports.useCityOptions = useCityOptions;
exports.useCountryOptions = useCountryOptions;
exports.useStateOptions = useStateOptions;
//# sourceMappingURL=useDropdowns.js.map

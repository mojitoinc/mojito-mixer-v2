import { DropdownOptions } from '../components';
export declare const useCountryOptions: () => DropdownOptions[];
export declare const useStateOptions: (countryCode?: string) => DropdownOptions[];
export declare const useCityOptions: (countryCode?: string, stateCode?: string) => DropdownOptions[];

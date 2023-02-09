import { createContext, useContext } from 'react';
import { UIConfiguration, DefaultUIConfiguration } from '../config/UIConfiguration';

export const UIConfigurationContext =
  createContext<UIConfiguration>(DefaultUIConfiguration);

export const useUIConfiguration = (): UIConfiguration => {
  return useContext<UIConfiguration>(UIConfigurationContext);
};

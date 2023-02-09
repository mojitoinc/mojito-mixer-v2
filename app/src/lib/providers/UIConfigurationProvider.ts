import { createContext, useContext } from 'react';
import { DefaultUIConfiguration } from '../config/UIConfiguration';
import { UIConfiguration } from '../interfaces/ContextInterface';

export const UIConfigurationContext =
  createContext<UIConfiguration>(DefaultUIConfiguration);

export const useUIConfiguration = (): UIConfiguration => {
  return useContext<UIConfiguration>(UIConfigurationContext);
};

import { ContainerTypes } from '@views/MojitoCheckout/MojitoCheckOut.layout';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export interface Container {
  containerState: ContainerTypes;
  setContainerState: (value: ContainerTypes) => void;
}
const ContainerStateContext = createContext<Container>({} as Container);

interface ContainerStateProps {
  success?:boolean;
  children?: React.ReactNode
}

const ContainerStateProvider = ({ success, children }:ContainerStateProps) => {
  const [containerState, setContainerState] = useState<ContainerTypes>(
    ContainerTypes.CHECKOUT,
  );

  useEffect(() => {
    if (success) setContainerState(ContainerTypes.CONFIRMATION);
  }, [success]);
  const value = useMemo<Container>(() => {
    return { containerState, setContainerState };
  }, [containerState, setContainerState]);

  return (
    <ContainerStateContext.Provider value={ value }>
      { children }
    </ContainerStateContext.Provider>
  );
};
export default ContainerStateProvider;
export const useContainer = () => {
  return useContext(ContainerStateContext);
};

import { ContainerTypes } from '@views/MojitoCheckout/MojitoCheckOut.layout';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export interface Container {
  containerState: ContainerTypes;
  setContainerState: (value: ContainerTypes) => void;
}
const ContainerStateContext = createContext<Container>({} as Container);

interface ContainerStateProps {
  paymentId?:string;
  children?: React.ReactNode
}

const ContainerStateProvider = ({ paymentId, children }:ContainerStateProps) => {
  const [containerState, setContainerState] = useState<ContainerTypes>(
    ContainerTypes.CHECKOUT,
  );

  useEffect(() => {
    if (paymentId) setContainerState(ContainerTypes.CONFIRMATION);
  }, [paymentId]);
  
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

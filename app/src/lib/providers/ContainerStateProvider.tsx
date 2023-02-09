import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useDebug } from './DebugProvider';
import { ContainerTypes } from '../interfaces/ContextInterface'

export interface Container {
  containerState: ContainerTypes;
  setContainerState: (value: ContainerTypes) => void;
}
const ContainerStateContext = createContext<Container>({} as Container);


interface ContainerStateProps {
  paymentId?: string;
  success?: boolean
  children?: React.ReactNode;
}

export const ContainerStateProvider = ({
  paymentId,
  success,
  children,
}: ContainerStateProps) => {
  const debug = useDebug('ContainerStateProvider');
  const [containerState, setContainerState] = useState<ContainerTypes>(
    success ? ContainerTypes.CONFIRMATION : ContainerTypes.CHECKOUT,
  );

  useEffect(() => {
    debug.info('paymentId', { paymentId, success });
    if (paymentId || success) setContainerState(ContainerTypes.CONFIRMATION);
  }, [debug, paymentId, success]);

  const value = useMemo<Container>(() => {
    return { containerState, setContainerState };
  }, [containerState, setContainerState]);

  return (
    <ContainerStateContext.Provider value={ value }>
      { children }
    </ContainerStateContext.Provider>
  );
};

export const useContainer = () => {
  return useContext(ContainerStateContext);
};

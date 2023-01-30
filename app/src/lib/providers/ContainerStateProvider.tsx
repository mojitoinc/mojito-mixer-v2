import { ContainerTypes } from "@views/MojitoCheckout/MojitoCheckOut.layout";
import React, { createContext, useContext, useState } from "react";

export interface Container {
  containerState: ContainerTypes;
  setContainerState: (value: ContainerTypes) => void;
}
const ContainerStateContext = createContext<Container>({} as Container);

const ContainerStateProvider = ({ children }: { children?: React.ReactNode }) => {
  const [containerState, setContainerState] = useState<ContainerTypes>(
    ContainerTypes.CHECKOUT
  );
  return (
    <ContainerStateContext.Provider value={{ containerState, setContainerState }}>
      {children}
    </ContainerStateContext.Provider>
  );
};
export default ContainerStateProvider;
export const useContainer = () => {
  return useContext(ContainerStateContext);
};

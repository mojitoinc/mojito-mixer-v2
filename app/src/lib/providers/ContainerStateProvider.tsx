import { ContainerTypes } from "@views/MojitoCheckout/MojitoCheckOut.layout";
import React, { createContext, useContext, useState } from "react";

export interface Container {
  containerState: ContainerTypes;
  setContainerState: (value: ContainerTypes) => void;
}
const ContainerContext = createContext<Container>({} as Container);

const ContainerProvider = ({ children }: { children?: React.ReactNode }) => {
  const [containerState, setContainerState] = useState<ContainerTypes>(
    ContainerTypes.CHECKOUT
  );
  return (
    <ContainerContext.Provider value={{ containerState, setContainerState }}>
      {children}
    </ContainerContext.Provider>
  );
};
export default ContainerProvider;
export const useContainer = () => {
  return useContext(ContainerContext);
};

import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import React, { ErrorInfo, useCallback } from "react";
import {  MojioCheckout } from "../lib";
  
export const CheckoutComponent: React.FC = ({

}) => {
  const router = useRouter();
  
  return <MojioCheckout   />;
};

import { useAuth0 } from "@auth0/auth0-react";
import MojitoCheckout from "@lib/public/MojitoCheckout";
import { useRouter } from "next/router";
import React, { ErrorInfo, useCallback } from "react";

export const CheckoutComponent: React.FC = ({}) => {
  const router = useRouter();

  return (
    <MojitoCheckout
      userInfo={{
        email: "ShowriSrinivas@gmail.com",
      }}
    />
  );
};

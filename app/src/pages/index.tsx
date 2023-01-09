import React, { useCallback, useState } from "react";
import { CheckoutComponent } from "../component/CheckoutComponent";

const HomePage: React.FC = () => {
  const [isLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const onOpen = useCallback(() => {
    setOpen(prev => !prev);
  }, []);

  return (
    <CheckoutComponent />
  );
};

export default HomePage;

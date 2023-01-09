import React from "react";
import { storiesOf } from "@storybook/react";
import MojitoCheckout from "@lib/public/MojitoCheckout";

const stories = storiesOf("Payment", module);

stories.add("SHOW Express checkout", () => {
  return (
    <MojitoCheckout
      userInfo={{
        email: "Showrisrinivas@gmail.com",
      }} />
  );
});

stories.add("Hide Express checkout", () => {
  return (
    <MojitoCheckout
      uiConfiguration={{
        hideExpressCheckout: true,
      }}
      userInfo={{
        email: "Showrisrinivas@gmail.com",
      }} />
  );
});

export default stories;

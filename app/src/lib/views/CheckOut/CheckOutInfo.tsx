import { Box, Card, TextField, Typography, useTheme } from "@mui/material";
import React from "react";
import { Icons } from "../../icons";
import { useConfiguration } from "@providers/ConfigurationProvider";
import { useUser } from "@providers/UserProvider";
import { MixTheme } from "../../theme/ThemeOptions";
import Header from "../../components/Header";
import LinedText from "../../components/LinedText";
import Stepper from "../../components/Stepper";
import { CONTAINERSTATES } from "@lib/constants/states";

const CheckOutLayout = ({}) => {
  const theme = useTheme<MixTheme>();
  const config = useConfiguration();
  const userData = useUser();

  return (
    <Box
      sx={{
        backgroundColor: theme.global?.background,
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Box width={"100%"} padding={"30px"}>
        <Header />
        <Stepper currentState={CONTAINERSTATES.CHECKOUT}/>
        {!config.hideExpressCheckout && (
          <Box margin={"8px 0px"}>
            <LinedText text={"Express Checkout"} />
            <LinedText text={"OR"} />
          </Box>
        )}
        <Card
          sx={{
            border: `1px solid ${theme.global?.cardBorder}`,
            backgroundColor: theme.global?.cardBackground,
            boxShadow: `0px 4px 16px ${theme.global?.cardShadow}`,
            margin: "24px 0px",
          }}
        >
          <Box padding={"14px"}>
            <Typography
              color={theme.palette?.text?.primary}
              fontWeight={"500"}
              fontSize={"20px"}
            >
              {"Contact Info"}
            </Typography>
            <TextField
              value={userData?.email}
              fullWidth
              sx={{
                marginTop: "16px",
              }}
            />
          </Box>
        </Card>
        <Card
          sx={{
            border: `1px solid ${theme.global?.cardBorder}`,
            backgroundColor: theme.global?.cardBackground,
            boxShadow: `0px 4px 16px ${theme.global?.cardShadow}`,
            margin: "0px 0px 24px 0px",
          }}
        >
          <Box padding={"14px"}>
            <Typography
              color={theme.palette?.text?.primary}
              fontWeight={"500"}
              fontSize={"20px"}
            >
              {"Billing Info"}
            </Typography>
            <TextField
              value={userData?.email}
              fullWidth
              sx={{
                marginTop: "16px",
              }}
            />
          </Box>
        </Card>
      </Box>
      <Box
        width={"100%"}
        height={'100%'}
        sx={{
          backgroundImage: `url(${Icons.background})`,
          backgroundSize:'100%'
        }}

      ></Box>
    </Box>
  );
};
export default CheckOutLayout;

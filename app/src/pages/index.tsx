 import { Typography, Box, Stack, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField, Select, MenuItem, InputLabel, FormGroup, Checkbox, SelectChangeEvent } from "@mui/material";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { CheckoutComponent } from "../component/CheckoutComponent";
 
const HomePage: React.FC = () => {
   
  const [isLoading] = useState(false);
  const [open,setOpen] = useState(false);

  const onOpen = useCallback(()=>{
    setOpen(prev=>!prev);
  },[]);

  return (
    <>
      <Box sx={{ my: 4 }}>
        <Stack spacing={ 2 } direction="row">
          <Button variant="contained" onClick={ onOpen } disabled={ isLoading }>Open Checkout Modal</Button>
        </Stack>
      </Box>

      <Box sx={{ my: 4 }}>
       
        <Typography variant="body2" sx={{ mt: 2 }}>If left empty, the modal will fail to load your saved payment methods and at making a purchase.</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>Still, after clearing the error that is shown in the modal when loading the page, you will be able to go through all the steps before the purchase is made.</Typography>
      </Box>

      <Box sx={{ my: 4 }}>
       

        <Typography variant="body2" sx={{ mt: 2 }}>The Lot ID field can be left empty, but you won’t be able to complete the purchase.</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>If you want to complete the purchase, make sure the lot also belongs to the organization referenced by the Org ID above.</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>The Payment UI handles invoice creation for both auction and buy now lots in this playground app, but will only do it for buy now lots in production.</Typography>
      </Box>

      <Box sx={{ my: 4 }}>
         
      </Box>

      <Box sx={{ my: 4 }}>
        
      </Box>

      <Box sx={{ my: 4 }}>
      
      </Box>

      <Box sx={{ my: 4 }}>
      
      </Box>

      <Box sx={{ my: 4 }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Multisig Wallets</FormLabel>
          {/* <FormGroup>
            <FormControlLabel control={ <Checkbox checked={ formValues.multiSigEnabled } value="" onChange={ handleChange } name="multiSigEnabled" /> } label="Multisig Wallets" />
          </FormGroup> */}
        </FormControl>
      </Box>

      <Box sx={{ my: 4 }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Container</FormLabel>

          {/* <RadioGroup
            name="container"
            value={ formValues.container }
            onChange={ handleChange }>
            <FormControlLabel value="fullscreen" label="Full Screen" control={ <Radio /> } />
            <FormControlLabel value="modal" label="Modal" control={ <Radio /> } />
          </RadioGroup> */}
        </FormControl>
      </Box>

      <Box sx={{ my: 4 }}>
        <Stack spacing={ 2 } direction="row">
          <Button variant="contained" onClick={ onOpen } disabled={ isLoading }>Open Checkout Modal</Button>
        </Stack>
      </Box>

      { /*
    <Box component="pre" sx={{ my: 4, p: 2, overflow: "scroll", border: 2, borderRadius: "4px" }}>
      {JSON.stringify(checkoutProps, (key, value) => {
        if (typeof value === "function") return value.name ? `function ${value.name}` : "() => { ... }";
        if (key === "theme" || key === "themeOptions" || key === "customTexts") return "{ ... }";

        return value;
      }, "  ")}
    </Box>

    <Box sx={{ my: 4 }}>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={onOpen} disabled={isLoading}>Open Checkout Modal</Button>
      </Stack>
    </Box>
    */ }

      {/* <Box sx={{ my: 2 }}>
        { PLAYGROUND_PARAGRAPHS_ARRAY.map((paragraph, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Typography key={ i } variant="body2" sx={{ my: 2 }}>{ paragraph }</Typography>
        )) }
      </Box> */}

      <Box sx={{ my: 4 }}>
        <Stack spacing={ 2 } direction="row">
          <Button variant="contained" onClick={ onOpen } disabled={ isLoading }>Open Checkout Modal</Button>
        </Stack>
      </Box>
      <CheckoutComponent   />
    </>
  );
};

export default HomePage;

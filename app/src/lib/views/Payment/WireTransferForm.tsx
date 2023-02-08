import { Typography, useTheme } from "@mui/material";
import { FormikErrors } from "formik";
import React, { useCallback, useMemo } from "react";
import { TextInput, Dropdown, DropdownOptions } from "../../components";
import { BanksList } from "../../constants";
import { useCountryOptions } from "../../hooks";
import { MixTheme } from "../../theme";

export interface WireTransferFormData {
  accountNumber: string;
  aba: string;
  bankCountry: string;
  bankName: string;
}

interface WireTransferFormProps {
  values: WireTransferFormData;
  handleChange: any;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<WireTransferFormData>>;
  errors: FormikErrors<WireTransferFormData>;
}

export const WireTransferForm = ({
  values,
  handleChange,
  setFieldValue,
  errors,
}: WireTransferFormProps) => {
  const countryOptions = useCountryOptions();
  const theme = useTheme<MixTheme>();
  const bankOptions: DropdownOptions[] = useMemo(() => {
    return BanksList.map((item: string) => ({
      label: item,
      value: item,
    }));
  }, []);

  const formatAccountNumber = useCallback(
    async (value: string) => {
      const accountNumberLength = values?.accountNumber
        ? values?.accountNumber?.length
        : 0;
      if (accountNumberLength > value.length) {
        await setFieldValue("accountNumber", value);
        return;
      }
      const isValid = value.match(/^[\d\s]+$/);
      if (isValid) {
        const accountNumber = value.split(" ").join("");
        await setFieldValue(
          "accountNumber",
          accountNumber.replace(/\d{4}(?=.)/g, "$& ")
        );
      }
    },
    [setFieldValue, values]
  );
  const formatRouterNumber = useCallback(
    async (value: string) => {
      const abaLength = values?.aba ? values?.aba?.length : 0;
      if (abaLength > value.length) {
        await setFieldValue("aba", value);
        return;
      }
      const aba = value.split(" ").join("");
      await setFieldValue("aba", aba.replace(/^(.{4})(.*)$/, "$1 $2"));
    },
    [setFieldValue, values]
  );

  return (
    <>
      <Typography variant="body2" sx={{ marginTop: 2 }}>
        Third-party wire transfers are not accepted.
      </Typography>
      <TextInput
        value={values.accountNumber}
        title="Account Number"
        onChange={formatAccountNumber}
        sx={{
          marginTop: "16px",
        }}
        placeholder="Enter account number"
        type="text"
        error={errors.accountNumber}
      />
      <TextInput
        value={values.aba}
        title="Routing Number (ABA)"
        onChange={formatRouterNumber}
        sx={{
          marginTop: "16px",
        }}
        placeholder="Enter routing number"
        type="text"
        error={errors.aba}
      />
      <Dropdown
        value={values.bankCountry}
        onChange={handleChange("bankCountry")}
        title="Bank Country"
        sx={{ marginRight: "8px", marginTop: 2 }}
        placeholder="Select one"
        options={countryOptions}
        error={errors.bankCountry}
      />
      <Dropdown
        value={values.bankName}
        onChange={handleChange("bankName")}
        title="Bank Name"
        placeholder="Type to search or select"
        sx={{ marginRight: "8px", marginTop: 2 }}
        options={bankOptions}
        error={errors.bankName}
      />
      <Typography
        variant="body2"
        sx={{
          color: theme.global?.cardGrayedText,
          padding: "12px 16px",
          marginTop: 2,
          backgroundColor: theme.global?.grayBackground,
          borderRadius: "4px",
        }}
      >
        Please note that wire transfers usually take 1-3 business days to
        complete and your NFT will not be transferred until payment has been
        settled.
      </Typography>
    </>
  );
};

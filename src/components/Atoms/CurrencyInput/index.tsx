import { TextField } from '@mui/material';
import React from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import { InputPropsDefault } from './styles';

const defaultMaskOptions = {
  prefix: '$',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 2,
  integerLimit: 12,
  allowNegative: true,
  allowLeadingZeroes: false,
};

const CurrencyMask = ({ maskOptions, ...inputProps }: any) => {
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions,
  });

  return <MaskedInput mask={currencyMask} {...inputProps} />;
};

const CurrencyInput = ({
  id,
  label,
  value,
  onChange,
  error,
  required,
  fullWidth,
  disabled,
  placeholder,
  prefix,
  defaultValue,
  ...other
}: any) => {
  return (
    <TextField
      id={id}
      variant="outlined"
      label={label}
      value={value}
      onChange={onChange}
      error={!!error}
      helperText={error ? error.message : null}
      required={required}
      fullWidth={fullWidth}
      InputLabelProps={InputPropsDefault()}
      prefix={prefix}
      {...other}
      InputProps={{
        inputComponent: CurrencyMask,
      }}
      disabled={disabled}
      placeholder={placeholder}
      color={'secondary'}
    />
  );
};

export default CurrencyInput;

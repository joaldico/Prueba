import { TextField } from '@mui/material';
import { FC } from 'react';

import { inputPropsDefault, useStylesInputLabel } from '../styles';

type TextFieldFormProps = {
  props?: any;
  label?: any;
  value?: any;
  error?: any;
  required?: any;
  disabled?: any;
  fullWidth?: any;
  placeholder?: any;
  maxCharacters?: any;
  onChange?: any;
  trigger?: any;
  name?: any;
};

export const TextFieldForm: FC<TextFieldFormProps> = ({
  label,
  value,
  error,
  required,
  disabled,
  fullWidth,
  placeholder,
  maxCharacters,
  onChange,
  name,
  trigger,
}) => {
  const classesInput = useStylesInputLabel();

  return (
    <TextField
      label={label}
      variant="outlined"
      disabled={disabled}
      error={!!error}
      helperText={error ? error.message : null}
      required={required}
      fullWidth={fullWidth}
      value={value}
      InputLabelProps={{
        ...inputPropsDefault(classesInput),
      }}
      placeholder={placeholder}
      onChange={(e) => {
        onChange(e);
        trigger(name);
      }}
      inputProps={{ maxLength: maxCharacters }}
    />
  );
};

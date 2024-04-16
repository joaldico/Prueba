import { TextField } from '@mui/material';
import { FC } from 'react';

import { inputPropsDefault, useStylesInputLabel } from '../styles';

type TextAreaProps = {
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
  multiline?: any;
  rows?: any;
  type?: any;
  minValue?: any;
  maxValue?: any;
  trigger?: any;
  name?: any;
};

export const TextArea: FC<TextAreaProps> = ({
  label,
  value,
  error,
  required,
  disabled,
  fullWidth,
  placeholder,
  maxCharacters,
  onChange,
  multiline,
  rows,
  type,
  minValue,
  maxValue,
  trigger,
  name,
}) => {
  const classesInput = useStylesInputLabel();

  return (
    <TextField
      label={label}
      variant="outlined"
      disabled={disabled}
      error={!!error}
      helperText={
        multiline ? (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {error ? error.message : 'ㅤ'}
            <p className={classesInput.rightText}>
              {' '}
              {value ? value.length : 0}/{maxCharacters ? maxCharacters : 100}
            </p>
          </div>
        ) : error ? (
          error.message
        ) : null
      }
      required={required}
      fullWidth={fullWidth}
      value={value}
      InputLabelProps={{
        ...inputPropsDefault(classesInput),
      }}
      multiline={multiline}
      rows={rows}
      placeholder={placeholder}
      onChange={(e) => {
        onChange(e);
        trigger(name);
      }}
      inputProps={
        type == 'number' ? { min: minValue, max: maxValue } : { maxLength: maxCharacters }
      }
      type={type}
    />
  );
};

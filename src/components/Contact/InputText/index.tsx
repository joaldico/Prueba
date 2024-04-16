import { InputProps, TextField, TextFieldProps } from '@mui/material';
import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';

import { useStyles } from '../../../styles/global/inputStyles';

type InputTextProps = TextFieldProps & {
  value: string;
  // eslint-disable-next-line
  error?: any;
  readOnly?: boolean;
  variant?: 'outlined' | 'standard' | 'filled';
  maxLength?: string | number;
  minLength: string | number;
  multiline?: boolean;
  minRows?: number;
  maxRows?: number;
  required?: boolean;
  type?: string;
  InputProps?: InputProps;
};

const VALIDATION_DEFAULT_VALUE = { value: false, info: false, message: '' };

const InputText: FC<InputTextProps> = ({
  value,
  error,
  readOnly,
  variant,
  maxLength,
  minLength,
  multiline,
  minRows,
  maxRows,
  required,
  type,
  InputProps,
  ...restOfProps
}) => {
  const classes = useStyles();
  const [validation, setValidation] = useState(VALIDATION_DEFAULT_VALUE);
  const maxLengthByType = maxLength !== undefined && type === 'email' ? 50 : maxLength;

  useEffect(() => {
    if (value.length > 0) {
      validateMinLength();
      validateEmailPattern();
    } else {
      setValidation(VALIDATION_DEFAULT_VALUE);
    }
  }, [value]);

  function validateMinLength() {
    if (value.length < minLength) {
      setValidation({
        value: true,
        message: `Ingresa mín. ${minLength} caracteres.`,
        info: false,
      });
    } else {
      setValidation(VALIDATION_DEFAULT_VALUE);
    }
  }

  function validateMaxLength() {
    if (maxLengthByType) {
      if (value.length >= maxLengthByType && !validation.value) {
        setValidation({
          info: true,
          message: `Ingresa máx. ${maxLengthByType} caracteres.`,
          value: false,
        });
      } else if (value.length < maxLengthByType && !validation.value) {
        setValidation(VALIDATION_DEFAULT_VALUE);
      }
    }
  }

  function validateEmailPattern() {
    if (type === 'email' && /\S+@\S+\.\S+/.test(value) && !validation.info) {
      setValidation(VALIDATION_DEFAULT_VALUE);
    } else if (type === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      setValidation({ value: true, message: 'Email no válido.', info: false });
    }
  }

  return (
    <TextField
      autoComplete="none"
      value={value}
      variant={'outlined'}
      error={!!error || validation.value}
      InputLabelProps={{
        shrink: true,
        classes: {
          asterisk: classes.asteriskColor,
          root: !!error || validation.value ? classes.errorColor : classes.labelRoot,
          focused: classes.cssFocused,
        },
      }}
      InputProps={{
        ...InputProps,
        readOnly: readOnly,
        classes: {
          root: classNames(!!error || validation.value ? classes.errorColor : classes.root),
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline,
        },
      }}
      FormHelperTextProps={{
        className: classes.helperText,
      }}
      required={required}
      multiline={multiline}
      minRows={minRows}
      maxRows={maxRows}
      type={type === 'date' ? 'date' : undefined}
      fullWidth
      inputProps={{
        maxLength: maxLengthByType,
        minLength: required ? minLength : 0,
      }}
      onKeyPress={(e) => {
        if (e.key !== 'Enter') {
          validateMaxLength();
        }
      }}
      onKeyDown={(e) => {
        if (type === 'number' && e.keyCode !== 8) {
          !RegExp('^([0-9]+)$').test(e.key) && e.preventDefault();
        }
      }}
      helperText={
        <>
          <span className={classes.p}>
            {error
              ? error.message
              : validation.value || (validation.info && !multiline)
              ? validation.message
              : null}
          </span>
          <span className={classes.p}>{multiline && `${value.length}/${maxLengthByType}`}</span>
        </>
      }
      {...restOfProps}
    />
  );
};

const defaultProps: InputTextProps = {
  variant: 'outlined',
  multiline: false,
  minRows: 3,
  maxRows: 5,
  required: false,
  minLength: 1,
  maxLength: 30,
  readOnly: false,
  type: 'text',
  value: '',
};

InputText.defaultProps = defaultProps;

export default InputText;

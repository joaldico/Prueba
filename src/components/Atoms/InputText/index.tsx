import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { InputProps, TextField, TextFieldProps } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';
import { validate as validateRut } from 'rut.js';

import { useStyles } from '../../../styles/global/inputStyles';
import { isValidPassword } from '../../../util/commons';

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
  showAsterisk?: boolean;
  type?: string;
  InputProps?: InputProps;
  showPassword?: boolean;
  isValidatePassword?: boolean;
  isIdentificationRut?: boolean;
  isShrink?: boolean;
  // eslint-disable-next-line
  handleClickShowPassword?: any;
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
  showAsterisk,
  type,
  isShrink,
  size,
  showPassword,
  isValidatePassword,
  isIdentificationRut,
  handleClickShowPassword,
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
      validatePassword();
      validateIdentificationRut();
    } else {
      setValidation(VALIDATION_DEFAULT_VALUE);
    }
  }, [value]);

  function validateIdentificationRut() {
    if (isIdentificationRut) {
      if (validateRut(value)) {
        setValidation(VALIDATION_DEFAULT_VALUE);
      } else
        setValidation({
          value: true,
          message: 'El formato del rut no es válido',
          info: false,
        });
    }
  }

  function validatePassword() {
    if (isValidatePassword) {
      if (type === 'password' && isValidPassword(value) && !validation.info) {
        setValidation(VALIDATION_DEFAULT_VALUE);
      } else if (type === 'password' && !isValidPassword(value)) {
        setValidation({
          value: false,
          message:
            'Tu clave debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número. Incluye un símbolo (!@#$%^&*.()_)',
          info: true,
        });
      }
    }
  }

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
      value={value}
      variant={'outlined'}
      error={!!error || validation.value}
      InputLabelProps={{
        shrink: isShrink,
        classes: {
          asterisk: classes.asteriskColor,
          root: !!error || validation.value ? classes.errorColor : classes.labelRoot,
          focused: classes.cssFocused,
        },
      }}
      InputProps={{
        ...InputProps,
        classes: {
          root: classNames(!!error || validation.value ? classes.errorColor : classes.root),
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline,
        },
        readOnly: readOnly,
        endAdornment: (
          <>
            {type === 'password' && (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )}
          </>
        ),
      }}
      FormHelperTextProps={{
        className: classes.helperText,
      }}
      required={required && showAsterisk}
      multiline={multiline}
      minRows={minRows}
      maxRows={maxRows}
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
              : validation.value || (validation.info && !multiline) || validation.info
              ? validation.message
              : null}
          </span>
          <span className={classes.p}>{multiline && `${value.length}/${maxLengthByType}`}</span>
        </>
      }
      type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
      autoComplete="off"
      size={size}
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
  showPassword: false,
  isValidatePassword: false,
  isShrink: true,
  isIdentificationRut: false,
  size: 'small',
  showAsterisk: false,
};

InputText.defaultProps = defaultProps;

export default InputText;

import { InputProps, TextFieldProps } from '@mui/material';
import { FC } from 'react';
import { Controller } from 'react-hook-form';

import InputText from '../InputText/index';

type InputTextControllerProps = TextFieldProps & {
  id?: string;
  name: string;
  label: string;
  placeholder: string;
  readOnly?: boolean;
  variant?: 'outlined' | 'standard' | 'filled';
  required?: boolean;
  showAsterisk?: boolean;
  minLength: string | number;
  // eslint-disable-next-line
  control?: any;
  defaultValue?: string;
  InputProps?: InputProps;
  maxLength?: string | number;
  multiline?: boolean;
  minRows?: number;
  maxRows?: number;
  requiredText?: string;
  type?: string;
  showPassword?: boolean;
  isValidatePassword?: boolean;
  isIdentificationRut?: boolean;
  isShrink?: boolean;
  // eslint-disable-next-line
  handleClickShowPassword?: any
};

const InputTextController: FC<InputTextControllerProps> = ({
  id,
  name,
  label,
  placeholder,
  readOnly,
  variant,
  required,
  minLength,
  control,
  defaultValue,
  InputProps,
  maxLength,
  multiline,
  minRows,
  maxRows,
  requiredText,
  type,
  ...restOfProps
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputText
          id={id}
          label={label}
          value={value}
          onChange={onChange}
          error={error}
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          multiline={multiline}
          minRows={minRows}
          maxRows={maxRows}
          required={required}
          type={type}
          readOnly={readOnly}
          variant={variant}
          InputProps={InputProps}
          {...restOfProps}
        />
      )}
      rules={{
        required: {
          value: required ? required : false,
          message: requiredText ? requiredText : `${label} es requerido.`,
        },
        minLength: {
          value: minLength,
          message: `Ingresa mín. ${minLength} caracteres.`,
        },
      }}
    />
  );
};

const defaultProps: InputTextControllerProps = {
  variant: 'outlined',
  multiline: false,
  minRows: 3,
  maxRows: 5,
  required: false,
  minLength: 1,
  maxLength: 30,
  readOnly: false,
  type: 'text',
  defaultValue: '',
  id: '',
  name: '',
  label: '',
  placeholder: '',
};

InputTextController.defaultProps = defaultProps;

export default InputTextController;

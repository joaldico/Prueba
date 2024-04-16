import { InputProps, TextFieldProps } from '@mui/material';
import moment from 'moment';
import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import InputText from '../InputText/index';

type InputTextControllerProps = TextFieldProps & {
  id?: string;
  name: string;
  label: string;
  placeholder: string;
  readOnly?: boolean;
  variant?: 'outlined' | 'standard' | 'filled';
  required?: boolean;
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
  checkSameValue?: (value: string | number) => boolean;
  onlyLetters?: boolean;
  typeInternal?: string;
  validateRange?: boolean;
  validateRangeInternal?: boolean;
  validateRangeMin?: number;
  validateRangeMax?: number;
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
  checkSameValue,
  onlyLetters,
  typeInternal,
  validateRange,
  validateRangeInternal,
  validateRangeMin,
  validateRangeMax,
  ...restOfProps
}) => {
  const { t } = useTranslation();
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
          onChange={(e) => {
            if (onlyLetters) {
              e.target.value = e.target.value.replace(/\d/g, '');
            }
            onChange(e);
          }}
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
        validate: {
          emailPattern: (value) => {
            if (type === 'email' && value.length > 0) {
              return /\S+@\S+\.\S+/.test(value) ? true : 'Email no válido.';
            } else {
              return true;
            }
          },
          sameValue: (value) => {
            if (type === 'email' && checkSameValue) {
              return !checkSameValue(value);
            } else {
              return true;
            }
          },
          age: (value) => {
            if (
              typeInternal === 'birthday' &&
              validateRange &&
              validateRangeInternal &&
              value !== ''
            ) {
              const ageUser = moment().diff(moment(value), 'years');
              if (
                validateRangeMin &&
                ageUser >= validateRangeMin &&
                validateRangeMax &&
                ageUser <= validateRangeMax
              )
                return true;
              else
                return t('pages.hirePlan.birthday.error', {
                  validateRangeMin,
                  validateRangeMax,
                });
            } else {
              return true;
            }
          },
        },
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

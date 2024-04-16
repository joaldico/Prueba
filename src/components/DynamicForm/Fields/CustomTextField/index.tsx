import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import { TextFieldForm } from './TextFieldForm';

type CustomTextFieldProps = {
  props?: any;
  label?: any;
  id?: any;
  error?: any;
  required?: any;
  disabled?: any;
  fullWidth?: any;
  placeholder?: any;
  maxCharacters?: any;
  trigger?: any;
  name?: any;
  control?: any;
  rules?: any;
};

export const CustomTextField: FC<CustomTextFieldProps> = ({
  control,
  name,
  required,
  label,
  maxCharacters,
  rules,
  placeholder,
  trigger,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <TextFieldForm
          required={required}
          label={label}
          onChange={onChange}
          fullWidth
          value={value}
          error={error}
          maxCharacters={maxCharacters}
          placeholder={placeholder}
          trigger={trigger}
          name={name}
        />
      )}
      rules={{
        ...rules,
      }}
    />
  );
};

CustomTextField.defaultProps = {
  id: uuidv4(),
  maxCharacters: 50,
  required: false,
};

export default CustomTextField;

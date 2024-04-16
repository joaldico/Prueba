import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import { TextArea } from './TextArea';

type CustomTextAreaProps = {
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
  multiline?: any;
  rules?: any;
  rows?: any;
  type?: any;
  minValue?: any;
  maxValue?: any;
};

const CustomTextArea: FC<CustomTextAreaProps> = ({
  control,
  name,
  required,
  label,
  maxCharacters,
  rules,
  placeholder,
  multiline,
  rows,
  type,
  minValue,
  maxValue,
  trigger,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <TextArea
          required={required}
          label={label}
          onChange={onChange}
          fullWidth
          value={value}
          error={error}
          maxCharacters={maxCharacters}
          placeholder={placeholder}
          multiline={multiline}
          rows={rows}
          type={type}
          minValue={minValue}
          maxValue={maxValue}
          name={name}
          trigger={trigger}
        />
      )}
      rules={{
        ...rules,
      }}
    />
  );
};

CustomTextArea.defaultProps = {
  id: uuidv4(),
  maxCharacters: 50,
  required: false,
  multiline: false,
  rows: 1,
  type: 'text',
};

export default CustomTextArea;

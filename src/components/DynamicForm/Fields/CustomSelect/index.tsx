import { FC } from 'react';
import { Controller } from 'react-hook-form';

import SelectComponent from './Select';

type CustomSelectProps = {
  props?: any;
  data?: any;
  name?: any;
  label?: any;
  placeholder?: any;
  required?: any;
  control?: any;
  rules?: any;
  maxCharacters?: any;
  trigger?: any;
  multiple?: any;
  limitTags?: any;
  selectAll?: any;
  isSortData?: any;
  fullWidth?: any;
  disableCloseOnSelect?: any;
  disableClearable?: any;
};

const CustomSelect: FC<CustomSelectProps> = ({ name, control, rules, trigger, ...selectProps }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <SelectComponent
          id={name}
          value={value}
          error={error}
          onChange={onChange}
          trigger={trigger}
          {...selectProps}
        />
      )}
      rules={{
        ...rules,
      }}
    />
  );
};

export default CustomSelect;

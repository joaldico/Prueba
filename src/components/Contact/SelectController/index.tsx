import { FC } from 'react';
import { Controller } from 'react-hook-form';

import Select from '../../Select';

type SelectControllerProps = {
  id?: number;
  data: Array<object>;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean | undefined;
  // eslint-disable-next-line
  control?: any;
  defaultValue?: string;
  requiredText?: string;
  className?: string;
  disabled?: boolean;
  checkSameValue?: (value: string | number) => boolean;
};

const SelectController: FC<SelectControllerProps> = ({
  id,
  name,
  label,
  placeholder,
  required,
  control,
  defaultValue,
  requiredText,
  data,
  disabled,
  checkSameValue,
  ...restOfProps
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Select
          data={data}
          label={label}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          error={error}
          fullWidth
          required={required}
          disabled={disabled}
          {...restOfProps}
        />
      )}
      rules={{
        validate: {
          sameValue: () => {
            if (checkSameValue && (id === 0 || id)) {
              return !checkSameValue(id);
            } else {
              return true;
            }
          },
        },
        required: {
          value: required ? required : false,
          message: requiredText ? requiredText : `${label} es requerido.`,
        },
      }}
    />
  );
};

const defaultProps: SelectControllerProps = {
  data: [],
  required: false,
  defaultValue: '',
  name: '',
  label: '',
  placeholder: 'Selecciona',
};

SelectController.defaultProps = defaultProps;

export default SelectController;

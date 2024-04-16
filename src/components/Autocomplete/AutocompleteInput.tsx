import { Autocomplete, TextField, TextFieldProps } from '@mui/material';
import { FC } from 'react';

import { useStyles } from '../../styles/global/inputStyles';

type AutocompleteInputProps = TextFieldProps & {
  // eslint-disable-next-line
  id?: any;
  name?: any;
  label?: any;
  value?: any;
  fullWidth?: any;
  placeholder?: any;
  onChange?: any;
  options?: any;
  disabled?: any;
  required?: any;
  disableClearable?: any;
  error?: any;
  defaultValue?: any;
  variant?: 'outlined' | 'standard' | 'filled';
  inputValue?: any;
  onInputChange?: any;
};

const AutocompleteInput: FC<AutocompleteInputProps> = ({
  id,
  name,
  label,
  value,
  fullWidth,
  placeholder,
  onChange,
  options,
  disabled,
  required,
  disableClearable,
  error,
  defaultValue = '',
}) => {
  const classes = useStyles();

  function SortArray(x: any, y: any) {
    if (x.label < y.label) {
      return -1;
    }
    if (x.label > y.label) {
      return 1;
    }
    return 0;
  }

  const getSortedData = () => {
    return options.sort(SortArray);
  };

  return (
    <Autocomplete
      defaultValue={defaultValue}
      disableClearable={disableClearable}
      disabled={disabled}
      options={getSortedData()}
      getOptionLabel={(option) => (option.label ? option.label : '')}
      value={value}
      onChange={(_, newValue) => {
        onChange(newValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          id={id ? id : `autoComplete-${label}`}
          name={name}
          label={label}
          variant={'outlined'}
          placeholder={placeholder}
          InputLabelProps={{
            shrink: true,
            classes: {
              asterisk: classes.asterikColor,
              root: error ? classes.errorColor : classes.labelRoot,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            ...params.InputProps,
            color: 'secondary',
          }}
          fullWidth={fullWidth}
          required={required}
          error={error}
          helperText={error ? error.message : null}
        />
      )}
    />
  );
};

AutocompleteInput.defaultProps = {
  disableClearable: false,
  fullWidth: false,
  options: [],
};

export default AutocompleteInput;

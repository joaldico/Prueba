import { TextField, TextFieldProps } from '@mui/material';
import { FC } from 'react';
import InputMask from 'react-input-mask';

import { useStyles } from './styles';

type PhoneInputProps = TextFieldProps & {
  // eslint-disable-next-line
  error: any;
  onChange: CallableFunction;
  value: string | number | readonly string[] | undefined;
};

const PhoneInput: FC<PhoneInputProps> = ({
  id,
  label,
  value,
  error,
  required,
  fullWidth,
  disabled,
  onChange,
  ...restOfProps
}) => {
  const classes = useStyles();

  return (
    <InputMask mask="(+99) 9 99999999" value={value} onChange={onChange}>
      {() => (
        <TextField
          id={id}
          variant="outlined"
          label={label}
          required={required}
          error={!!error}
          disabled={disabled}
          helperText={
            <>
              <span>{error && error.message}</span>
            </>
          }
          fullWidth={fullWidth}
          InputLabelProps={{
            shrink: true,
            classes: {
              asterisk: classes.asteriskColor,
            },
          }}
          {...restOfProps}
        />
      )}
    </InputMask>
  );
};

export default PhoneInput;

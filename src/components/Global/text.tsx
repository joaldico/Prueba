import { TextField, TextFieldProps } from '@mui/material';
import { FieldError } from 'react-hook-form';

import { useStyles } from '../../styles/global/inputStyles';

type TextProps = Omit<TextFieldProps, 'error'> & {
  error: FieldError | undefined;
  readOnly: boolean;
};

export default function Text({
  error,
  readOnly,
  variant = 'outlined',
  ...rest
}: TextProps): JSX.Element {
  const classes = useStyles();

  return (
    <TextField
      variant={variant}
      helperText={error ? error.message : null}
      InputLabelProps={{
        shrink: true,
        classes: {
          asterisk: classes.asteriskColor,
        },
      }}
      InputProps={{
        readOnly: readOnly,
      }}
      {...rest}
    />
  );
}

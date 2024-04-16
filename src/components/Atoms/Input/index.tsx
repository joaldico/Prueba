import { TextField, TextFieldProps } from '@mui/material';
import { FC } from 'react';
import { FieldError } from 'react-hook-form';

import { useStyles } from '../../../styles/global/inputStyles';

type TextProps = TextFieldProps & {
  error?: FieldError;
  readOnly: boolean;
};

export const Input: FC<TextProps> = ({ error, readOnly, variant = 'outlined', ...rest }) => {
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
};

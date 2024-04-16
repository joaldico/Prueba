import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import { FieldError } from 'react-hook-form';

import { useStyles } from '../../styles/global/inputStyles';

type ChangeEventHandler = React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;

interface PasswordProps {
  id: string;
  label: string;
  value: string;
  onChange: ChangeEventHandler;
  error: FieldError | undefined;
  required: boolean;
  fullWidth: boolean;
  readOnly: boolean;
}

export default function Password(props: PasswordProps): JSX.Element {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      id={props.id}
      label={props.label}
      variant="outlined"
      value={props.value}
      type={showPassword ? 'text' : 'password'}
      onChange={props.onChange}
      error={!!props.error}
      helperText={props.error ? props.error.message : null}
      required={props.required}
      fullWidth={props.fullWidth}
      InputLabelProps={{
        shrink: true,
        classes: {
          asterisk: classes.asteriskColor,
        },
      }}
      InputProps={{
        readOnly: props.readOnly,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              onMouseDown={(event) => {
                event.preventDefault();
              }}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

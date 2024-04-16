import { Checkbox, CheckboxProps, FormControlLabel, FormGroup } from '@mui/material';
import { FC, ReactElement } from 'react';

interface TextProps extends CheckboxProps {
  label?: string | ReactElement;
}

export const CheckBox: FC<TextProps> = ({ label = '', color = 'info', ...rest }: TextProps) => {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox color={color} {...rest} />} label={label} />
    </FormGroup>
  );
};

import { MenuItem, TextField } from '@mui/material';
import classNames from 'classnames';

import { useStyles as inputStyles } from '../../styles/global/inputStyles';
import { useStyles } from './styles';

type ChangeEventHandler = React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;

interface SelectProps {
  id?: string;
  label?: string;
  value?: string;
  error?: any;
  onChange?: ChangeEventHandler;
  data: any;
  fullWidth?: boolean;
  placeholder?: string;
  className?: any;
  MenuClass?: any;
  required?: boolean;
  disabled?: boolean;
  disabledPlaceholder?: boolean;
  textCleanValue: string;
  variant?: any;
}

function Select(props: SelectProps): JSX.Element {
  const classes = useStyles();
  const classesInputGlobalStyles = inputStyles();
  return (
    <TextField
      id={props.id}
      select
      defaultValue=""
      label={props.label}
      variant={props.variant ? props.variant : 'outlined'}
      value={props.value || ''}
      error={props.error ? props.error : false}
      onChange={props.onChange}
      fullWidth={props.fullWidth}
      InputLabelProps={{
        shrink: true,
        classes: {
          asterisk: classesInputGlobalStyles.asteriskColor,
          root: classesInputGlobalStyles.labelRoot,
          focused: classesInputGlobalStyles.cssFocused,
        },
      }}
      SelectProps={{
        displayEmpty: true,
      }}
      InputProps={{
        className: classNames(props.className, classesInputGlobalStyles.input),
      }}
      required={props.required || false}
      disabled={props.disabled}
      helperText={
        <>
          <span className={classesInputGlobalStyles.p}>
            {props.error ? props.error.message : null}
          </span>
        </>
      }
    >
      {props.placeholder && (
        <MenuItem
          value={''}
          disabled={props.value == '' ? props.disabledPlaceholder : false}
          classes={{
            selected: classNames(classesInputGlobalStyles.selected, props.MenuClass),
            root: classNames(classes.rootPlaceholder, props.MenuClass),
          }}
        >
          {props.value == '' ? props.placeholder : props.textCleanValue}
        </MenuItem>
      )}

      {props.data.map((option: any) => {
        return (
          <MenuItem
            key={option.value}
            value={option.value}
            classes={{
              selected: classNames(classesInputGlobalStyles.selected, props.MenuClass),
              root: classNames(classes.root, props.MenuClass),
            }}
          >
            {option.label}
          </MenuItem>
        );
      })}
    </TextField>
  );
}

Select.defaultProps = {
  disabledPlaceholder: true,
  textCleanValue: 'Limpiar busqueda',
  variant: 'outlined',
};

export default Select;

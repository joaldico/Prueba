import { MenuItem, TextField } from '@mui/material';

import { useStyles } from '../../../styles/global/inputStyles';

type ChangeEventHandler = React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;

interface SelectProps {
  id?: string;
  label?: string;
  value?: string;
  onChange?: ChangeEventHandler;
  data: any;
  fullWidth?: boolean;
  placeholder?: string;
}

function Select(props: SelectProps): JSX.Element {
  const classes = useStyles();

  return (
    <TextField
      id={props.id}
      select
      label={props.label}
      variant="outlined"
      value={props.value}
      onChange={props.onChange}
      fullWidth={props.fullWidth}
      InputLabelProps={{
        shrink: true,
        classes: {
          asterisk: classes.asteriskColor,
          root: classes.labelRoot,
          focused: classes.cssFocused,
        },
      }}
      SelectProps={{
        displayEmpty: true,
      }}
      InputProps={{
        className: classes.input,
      }}
      size="small"
    >
      {props.placeholder && (
        <MenuItem
          value={''}
          disabled
          classes={{
            selected: classes.selected,
            root: classes.rootMenu,
          }}
        >
          {props.placeholder}
        </MenuItem>
      )}

      {props.data.map((option: any) => {
        return (
          <MenuItem
            key={option.value}
            value={option.value}
            classes={{
              selected: classes.selected,
              root: classes.root,
            }}
          >
            {option.label}
          </MenuItem>
        );
      })}
    </TextField>
  );
}

export default Select;

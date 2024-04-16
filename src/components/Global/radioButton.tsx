import { FormControlLabel, Radio, RadioGroup, RadioGroupProps } from '@mui/material';

interface TextProps {
  id?: string;
  label: string;
  value: any;
  onChange: (value: any) => void;
  itemList: { value: any; name: string; default?: boolean }[];
  radioGroupProps?: RadioGroupProps;
  classes?: any;
}

export default function RadioButton(props: TextProps): JSX.Element {
  const { classes } = props;

  return (
    <RadioGroup
      aria-label={props.label}
      name={props.label}
      value={props.value}
      onChange={props.onChange}
    >
      {props.itemList.map((item, index) => (
        <FormControlLabel
          key={index}
          value={item.value}
          className={classes.radioLabelStyle}
          control={<Radio className={classes.radioButtonStyle} checked={item.default} />}
          label={item.name}
        />
      ))}
    </RadioGroup>
  );
}

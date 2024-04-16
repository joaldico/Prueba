import { IndeterminateCheckBox } from '@mui/icons-material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { inputPropsDefault, useStylesInputLabel } from '../styles';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const IndeterminateIcon = <IndeterminateCheckBox fontSize="small" color="primary" />;

type SelectComponentProps = {
  props?: any;
  id?: any;
  value?: any;
  disableCloseOnSelect?: any;
  noWrap?: any;
  disableClearable?: any;
  limitTags?: any;
  selectAll?: any;
  placeholder?: any;
  type?: any;
  trigger?: any;
  error?: any;
  onChange?: any;
  label?: any;
  data?: any;
  required?: any;
  fullWidth?: any;
  disabled?: any;
  multiple?: any;
};

const SelectComponent: FC<SelectComponentProps> = ({
  id,
  label,
  value,
  onChange,
  error,
  data,
  required,
  fullWidth,
  disabled,
  multiple,
  disableCloseOnSelect,
  disableClearable,
  limitTags,
  selectAll,
  placeholder,
  type,
  trigger,
}) => {
  const getSortedData = () => {
    return data.sort((x: any, y: any) =>
      x.label.localeCompare(y.label, 'es', { sensitivity: 'base', numeric: true })
    );
  };

  //Opcion de seleccionar todos
  const allOption = {
    label: 'Seleccionar todos',
    value: 'select-all',
  };

  const classesInput = useStylesInputLabel();
  return (
    <Autocomplete
      id={id}
      multiple={multiple}
      limitTags={limitTags}
      options={data?.length > 0 ? getSortedData() : []}
      disableCloseOnSelect={disableCloseOnSelect}
      disableClearable={disableClearable}
      disabled={disabled}
      onChange={(event, newValue) => {
        //Si la opcion que seleccionan es "seleccionar todos"
        if (selectAll) {
          if (newValue.find((option: any) => option.value === allOption.value)) {
            //Verificamos si están todas las opciones seleccionadas
            if (value.length != data.length) {
              onChange(data);
            } else {
              //Si estan todas seleccionadas limpiamos los seleccionados
              onChange([]);
            }
          } else {
            onChange(newValue);
          }
        } else {
          onChange(newValue);
        }
        trigger(id);
        return newValue;
      }}
      value={value}
      getOptionLabel={(option) => option.label}
      renderOption={(option: any, { selected }) => {
        const selectedOptionCheckbox = option.value == allOption.value;
        return (
          <React.Fragment>
            {multiple &&
              (selectedOptionCheckbox ? (
                <Checkbox
                  checked={value.length === data.length}
                  style={{ marginRight: 8 }}
                  indeterminate={value.length > 0 && value.length < data.length}
                  // onChange={handleSelectAll}
                  indeterminateIcon={IndeterminateIcon}
                  checkedIcon={checkedIcon}
                  icon={icon}
                />
              ) : (
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
              ))}
            <ListItemText primary={option.label} />
          </React.Fragment>
        );
      }}
      style={{ width: '100%' }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          disabled={disabled}
          error={!!error}
          helperText={error ? error.message : null}
          required={required}
          fullWidth={fullWidth}
          value={value}
          type={type}
          InputLabelProps={{
            ...inputPropsDefault(classesInput),
          }}
          placeholder={placeholder}
        />
      )}
    />
  );
};

SelectComponent.defaultProps = {
  id: uuidv4(),
  value: [],
  disableCloseOnSelect: true,
  noWrap: false,
  disableClearable: false,
  limitTags: -1,
  selectAll: false,
  placeholder: 'Seleccione',
  type: 'text',
};

export default SelectComponent;

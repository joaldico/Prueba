import 'react-phone-input-2/lib/material.css';

import { FormHelperText, TextFieldProps } from '@mui/material';
import PropTypes from 'prop-types';
import { FC, useContext, useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import es from 'react-phone-input-2/lang/es.json';

import { COUNTRY_PHONE_DEFAULT } from '../../../constants/constants';
import BusinessUnitParamsContext from '../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import useStyles from './styles';

type PhoneInputProps = TextFieldProps & {
  // eslint-disable-next-line
  name: any;
  control: any;
  label: any;
  required: any;
  disabled?: boolean;
  variant?: 'outlined' | 'standard' | 'filled';
};

const CustomPhoneInput: FC<PhoneInputProps> = ({ name, control, label, required, disabled }) => {
  const { colorCode } = useContext(BusinessUnitParamsContext);
  const [countryCode, setCountryCode] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    if (required) {
      const labelSpecial: any = document.getElementById(label);
      if (labelSpecial && labelSpecial.previousSibling) {
        labelSpecial.previousSibling.innerHTML = `${label} <span style="color: rgba(245, 0, 87, 1)">*<span>`;
      }
    }
  }, [required, label]);

  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue={''}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <PhoneInput
              specialLabel={label}
              inputProps={{
                name: label,
                id: label,
                required: required,
              }}
              localization={es}
              value={value}
              onChange={onChange}
              disabled={disabled}
              inputStyle={{
                borderColor: error && '#d32f2f',
              }}
              containerClass={classes.borderInput}
              containerStyle={{
                color: error && '#d32f2f',
              }}
              dropdownStyle={{
                color: 'black',
              }}
              isValid={(value, country: any) => {
                setCountryCode(country.countryCode);
                const labelSpecial: any = document.getElementById(label);
                if (labelSpecial) {
                  if (required) {
                    if (error) {
                      if (labelSpecial.previousSibling)
                        labelSpecial.previousSibling.innerHTML = `<span style="color: #d32f2f">${label}</span><span style="color: rgba(245, 0, 87, 1); padding-left: 3px">*<span>`;
                    }
                  }
                }
                return true;
              }}
              enableLongNumbers={true}
              country={COUNTRY_PHONE_DEFAULT}
              onFocus={(e) => {
                const labelSpecial: any = document.getElementById(e.target.id);
                if (required) {
                  if (error) {
                    if (labelSpecial && labelSpecial.previousSibling)
                      labelSpecial.previousSibling.innerHTML = `<span style="color: #d32f2f">${label}</span><span style="color: rgba(245, 0, 87, 1); padding-left: 3px">*<span>`;
                  } else {
                    if (labelSpecial && labelSpecial.previousSibling)
                      labelSpecial.previousSibling.innerHTML = `<span style="color: #${colorCode}">${label}</span><span style="color: rgba(245, 0, 87, 1); padding-left: 3px">*<span>`;
                  }
                } else {
                  if (labelSpecial && labelSpecial.previousSibling)
                    labelSpecial.previousSibling.innerHTML = `<span style="color: #${colorCode}">${label}</span>`;
                }
              }}
              onBlur={(e) => {
                const labelSpecial: any = document.getElementById(e.target.id);
                if (required) {
                  if (error) {
                    if (labelSpecial && labelSpecial.previousSibling)
                      labelSpecial.previousSibling.innerHTML = `<span style="color: #d32f2f">${label}</span><span style="color: rgba(245, 0, 87, 1); padding-left: 3px">*<span>`;
                  } else {
                    if (labelSpecial && labelSpecial.previousSibling)
                      labelSpecial.previousSibling.innerHTML = `${label} <span style="color: rgba(245, 0, 87, 1)">*<span>`;
                  }
                } else {
                  if (labelSpecial && labelSpecial.previousSibling)
                    labelSpecial.previousSibling.innerHTML = `${label}`;
                }
              }}
            />
            {error && (
              <FormHelperText error style={{ marginLeft: '14px' }}>
                {error.message}
              </FormHelperText>
            )}
          </>
        )}
        rules={{
          required: required && `${label || name} es requerido`,
          validate: (value) => {
            if (value.length >= 1) {
              switch (countryCode) {
                case 54:
                  if (value.length < 11 || value.length > 15) return 'Teléfono inválido';
                  break;
                case 58:
                  if (value.length !== 12) return 'Teléfono inválido';
                  break;
                case 57:
                  if (value.length < 12 || value.length > 15) return 'Teléfono inválido';
                  break;
                case 52:
                  if (value.length < 12 || value.length > 15) return 'Teléfono inválido';
                  break;
                case 56:
                  if (value.length < 11 || value.length > 15) return 'Teléfono inválido';
                  break;
                default:
                  if (value.length < 11 || value.length > 20) return 'Teléfono inválido';
                  break;
              }
            }
          },
        }}
      />
    </>
  );
};

CustomPhoneInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

CustomPhoneInput.displayName = 'CustomPhoneInput';

export default CustomPhoneInput;

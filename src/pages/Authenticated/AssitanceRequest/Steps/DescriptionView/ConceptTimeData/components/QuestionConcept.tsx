import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

import CurrencyInput from './../../../../../../../components/Atoms/CurrencyInput';
import { useStyles } from './styles';

const QuestionConcept = ({
  index,
  name,
  measure,
  quantity,
  control,
  showDefault,
  showRadio,
  id,
}: any) => {
  const classes = useStyles();
  return (
    <Grid container key={index} sx={{ marginTop: '24px' }}>
      <Grid xs={12} md={4}>
        <Controller
          name={`quantity-${id}`}
          control={control}
          defaultValue={!showRadio ? quantity : ''}
          render={({ field: { onChange, value }, fieldState: { error } }) => {
            return !showRadio ? (
              <CurrencyInput
                prefix="$"
                id="quantity"
                label={`${name} ${measure}`}
                value={value}
                onChange={onChange}
                required
                maxLength={10}
                fullWidth={true}
                readOnly={false}
                disabled={showDefault}
                error={error}
              />
            ) : (
              <FormControl error={error ? true : false}>
                <FormLabel
                  component="legend"
                  id="demo-row-radio-buttons-group-label"
                  color={'primary'}
                  sx={{ fontSize: '12px', fontWeight: '400' }}
                >
                  {`${name} ${measure}`} <span className={classes.colorRadio}>*</span>
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={value}
                >
                  <FormControlLabel
                    value="si"
                    control={
                      <Radio
                        classes={{ root: classes.radio, checked: classes.checked }}
                        onChange={onChange}
                      />
                    }
                    label="Si"
                  />
                  <FormControlLabel
                    value="no"
                    control={
                      <Radio
                        classes={{ root: classes.radio, checked: classes.checked }}
                        onChange={onChange}
                      />
                    }
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            );
          }}
          rules={{
            required: {
              value: true && !showDefault,
              message: 'Campo requerido',
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default QuestionConcept;

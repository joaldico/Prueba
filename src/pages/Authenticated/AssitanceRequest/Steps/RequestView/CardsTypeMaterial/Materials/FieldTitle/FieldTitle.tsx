import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Checkbox, Typography } from '@mui/material';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { useStyles } from './styles';

interface FieldProps {
  field: string;
  isStrong?: boolean;
  isDisabled?: boolean;
  onChangeSelected: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}

const FieldTitle: React.FC<FieldProps> = ({
  field,
  onChangeSelected,
  isStrong,
  isDisabled,
  checked,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.column}>
        <Typography
          className={classNames(
            isDisabled ? classes.isDisabled : classes.text,
            isStrong && classes.textStrong
          )}
        >
          {field}
        </Typography>
      </div>
      <div>
        <Checkbox
          classes={{
            root: isDisabled ? classes.checkDisabled : checked ? classes.check : '',
          }}
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
          disabled={isDisabled}
          onChange={onChangeSelected}
          checked={checked}
        />
      </div>
    </div>
  );
};

FieldTitle.propTypes = {
  field: PropTypes.string.isRequired,
  isStrong: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onChangeSelected: PropTypes.func.isRequired,
  checked: PropTypes.bool,
};

export default FieldTitle;

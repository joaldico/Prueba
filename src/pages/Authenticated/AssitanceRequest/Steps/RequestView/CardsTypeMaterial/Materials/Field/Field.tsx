import { Typography } from '@mui/material';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { isEmpty } from '../../../../../../../../util/commons';
import { useStyles } from './styles';

interface FieldProps {
  field: any;
  value: any;
  isStrong?: any;
  customComponentValue?: any;
  isDisabled?: any;
  isSmall?: any;
}
const Field: React.FC<FieldProps> = ({
  field,
  value,
  isStrong,
  customComponentValue,
  isDisabled,
  isSmall,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={isSmall ? classes.columnSmall : classes.column}>
        <Typography
          className={classNames(
            isDisabled ? classes.isDisabled : classes.text,
            isStrong && classes.textStrong
          )}
        >
          {field}
        </Typography>
      </div>
      <div className={classes.columnValue}>
        {!isEmpty(customComponentValue) ? (
          customComponentValue
        ) : (
          <Typography
            className={classNames(
              isDisabled ? classes.isDisabled : classes.textValue,
              isStrong && classes.textStrong
            )}
          >
            {value}
          </Typography>
        )}
      </div>
    </div>
  );
};

Field.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Field;

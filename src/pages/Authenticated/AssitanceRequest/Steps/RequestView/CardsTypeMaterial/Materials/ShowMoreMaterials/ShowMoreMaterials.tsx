import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from 'react';

import { useStyles } from './styles';

interface ShowMoreMaterialsProps {
  showMore: boolean;
  handleShowMore: any;
}

const ShowMoreMaterials: React.FC<ShowMoreMaterialsProps> = ({ showMore, handleShowMore }) => {
  const classes = useStyles();

  return (
    <div className={classes.arrow}>
      {showMore ? (
        <KeyboardArrowUpIcon className={classes.icon} onClick={handleShowMore} />
      ) : (
        <KeyboardArrowDownIcon className={classes.icon} onClick={handleShowMore} />
      )}
    </div>
  );
};

export default ShowMoreMaterials;

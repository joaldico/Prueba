import { FC } from 'react';

import { useStyles } from './styles';

const PasswordRequirements: FC = () => {
  const classes = useStyles();

  return (
    <div>
      <div>Tu contraseña debe contener lo siguiente:</div>
      <ul className={classes.list}>
        <li>Al menos una mayúscula.</li> <li>Debe ser alfanumérica.</li>
        <li>Mínimo 8 carácteres.</li>
      </ul>
    </div>
  );
};

export default PasswordRequirements;

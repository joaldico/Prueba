import { Control, Controller, FieldValues } from 'react-hook-form';

import { validateEmail } from '../../util/validations';
import TextField from '../Global/text';

interface EmailProps {
  name: string;
  control: any;
  defaultValue: string;
}

export default function Email(props: EmailProps): JSX.Element {
  return (
    <Controller
      name={props.name}
      control={props.control}
      defaultValue={props.defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          id="email"
          label="Correo electrónico"
          value={value}
          onChange={onChange}
          error={error}
          required
          fullWidth
          readOnly={false}
        />
      )}
      rules={{
        required: 'El email es requerido',
        validate: {
          validateEmail: (v) => validateEmail(v) || 'El formato del correo es incorrecto',
        },
      }}
    />
  );
}

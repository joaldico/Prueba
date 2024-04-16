import { Button, Grid } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useStyles } from '../../../../styles/global/forms/formsAuthStyles';
import InputTextController from '../../../Atoms/InputTextController';

type FormInputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

type Props = {
  buttonText: string;
  email: string | null;
  onSubmit: any;
  onError: any;
  showInputError?: boolean;
  disabledButton?: boolean;
};

const PasswordForm: FC<Props> = ({
  email,
  buttonText,
  onSubmit,
  onError,
  showInputError,
  disabledButton,
}) => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { control, handleSubmit, setValue, setError } = useForm<FormInputs>({
    mode: 'all',
  });

  useEffect(() => {
    if (showInputError) {
      setError('password', { type: 'focus' }, { shouldFocus: true });
      setError('confirmPassword', { type: 'focus' }, { shouldFocus: true });
    }
  }, [showInputError]);

  useEffect(() => {
    if (email) setValue('email', email);
  }, [email]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} autoComplete="off">
      <input className={classes.fakeStyle} type="text" name="fakeuser" />
      <input className={classes.fakeStyle} type="password" name="fakepassword" />
      <Grid container rowSpacing={2} columnSpacing={5}>
        <Grid item xs={12}>
          <InputTextController
            name={'email'}
            label={'Correo electrónico'}
            placeholder={'Correo electrónico'}
            control={control}
            type={'email'}
            minLength={1}
            required={false}
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <InputTextController
            name={'password'}
            label={'Contraseña'}
            placeholder={'Contraseña'}
            control={control}
            type={'password'}
            minLength={1}
            required={true}
            showPassword={showPassword}
            handleClickShowPassword={handleClickShowPassword}
            isValidatePassword={true}
          />
        </Grid>
        <Grid item xs={12}>
          <InputTextController
            name={'confirmPassword'}
            label={'Repetir contraseña'}
            placeholder={'Repetir contraseña'}
            control={control}
            type={'password'}
            minLength={1}
            required={true}
            showPassword={showConfirmPassword}
            handleClickShowPassword={handleClickShowConfirmPassword}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            className={disabledButton ? classes.buttonDisabled : classes.button}
            variant="contained"
            size="medium"
            type="submit"
            onSubmit={handleSubmit(onSubmit, onError)}
            disabled={disabledButton ? disabledButton : false}
          >
            {buttonText}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default PasswordForm;

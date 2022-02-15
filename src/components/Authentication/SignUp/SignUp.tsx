import { Grid, Link, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { handleInputChange, validateInputs } from '../../../helpers/utils';
import { SignUpValuesTypes } from '../../../types/authentication';

const SignUp = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [values, setValues] = useState<SignUpValuesTypes>({
    lName: {
      required: true,
      errorMsg: 'This field is required',
      min: 3,
      max: 10,
      val: '',
    },
    fName: {
      errorMsg: 'This field is required',
      required: true,
      min: 3,
      max: 10,
      val: '',
    },
    email: {
      required: true,
      errorMsg: 'Please provide a correct email',
      pattern: /^([a-z0-9\+\._\/&!][-a-z0-9\+\._\/&!]*)@(([a-z0-9][-a-z0-9]*\.)([-a-z0-9]+\.)*[a-z]{2,})$/i,
      val: '',
    },
    password: {
      required: true,
      min: 8,
      errorMsg: `Password min length must be eight`,
      val: '',
    },
  });

  const handleSave = (e: any) => {
    const err: string[] = [];
    e.preventDefault();
    Object.keys(values).forEach((el) => {
      if (validateInputs(
          values[el as keyof typeof values].val,
          values[el as keyof typeof values]?.required,
          values[el as keyof typeof values]?.min,
          values[el as keyof typeof values]?.max,
          values[el as keyof typeof values]?.pattern,
      )) {
        err.push(el);
      }
    });
    if (err.length > 0) {
      setErrors(err);
    } else {
      console.log('kaiaa');
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
            onChange={(e) => handleInputChange('fName', e.target.value, values, setValues, errors, setErrors)}
            error={errors.includes('fName')}
            helperText={errors.includes('fName') && values.fName.errorMsg}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            error={errors.includes('lName')}
            helperText={errors.includes('lName') && values.lName.errorMsg}
            onChange={(e) => handleInputChange('lName', e.target.value, values, setValues, errors, setErrors)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            error={errors.includes('email')}
            helperText={errors.includes('email') && values.email.errorMsg}
            onChange={(e) => handleInputChange('email', e.target.value, values, setValues, errors, setErrors)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            error={errors.includes('password')}
            helperText={errors.includes('password') && values.password.errorMsg}
            onChange={(e) => handleInputChange('password', e.target.value, values, setValues, errors, setErrors)}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        onClick={handleSave}
        sx={{ mt: 3, mb: 2 }}
      >
              Sign Up
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link href="#" variant="body2">
                  Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUp;

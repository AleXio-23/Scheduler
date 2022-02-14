import { Grid, Link, TextField, Checkbox, FormControlLabel, Button } from '@mui/material';

const SignIn = () => {
  return (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
    Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
        Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            {'Don\'t have an account? Sign Up'}
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default SignIn;

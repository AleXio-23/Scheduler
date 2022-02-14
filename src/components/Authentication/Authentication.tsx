
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Typography, Container, Avatar, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

const Authentication = () => {
  const { type } = useParams();

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ m: 2 }}>
          {type === 'sign-up' ? 'Sign up' : 'Sign in' }
        </Typography>
        <Box component="form" onSubmit={() => console.log('egaa')} noValidate sx={{ mt: 1 }}>
          {type === 'sign-up' ? <SignUp /> : <SignIn /> }
        </Box>
      </Box>
    </Container>
  );
};

export default Authentication;

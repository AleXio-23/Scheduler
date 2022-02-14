import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../../helpers/theme';

const useStyles = makeStyles((theme) => {
  return {
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      background: theme.palette.primary.main,
    },
  };
}, { defaultTheme: theme });

const NavBar = () => {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar classes={{ root: classes.toolbar }}>
          <Typography variant="h6" component="p">
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};


export default NavBar;

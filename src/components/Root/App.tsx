import SignIn from "../Auth/SignIn/SIgnIn";
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/theme'
import SignUp from "../Auth/SignUp/SignUp";
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
        {/* <SignIn/> */}
        <SignUp/>
    </div>
    </ThemeProvider>
  );
}

export default App;

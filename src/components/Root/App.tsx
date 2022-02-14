import { ThemeProvider } from '@emotion/react';
import { Routes, Route } from 'react-router-dom';
import Authentication from '../Authentication/Authentication';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';
import theme from '../../helpers/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/auth/:type" element={<Authentication />}/>
            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            {/* <Route path="*" element={<NoMatch />} /> */}
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import Authentication from '../Authentication/Authentication';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';

function App() {
  return (
    <div className="App">
      <div>qqd</div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="authentication" element={<Authentication />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;

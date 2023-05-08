import { CssBaseline } from "@mui/material";
import "./App.css";
import NavBar from "./navigation/navbar";
import { RouterNavigate } from './navigation/navigate'
import Newsletter from "./screens/Newsletter";
import { NEWSLETTER_URL } from "./navigation/PageLinks";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      <CssBaseline />
      {pathname !== '/' ?
        <>
          <NavBar />
          <main>
            <Routes>
              {RouterNavigate.map((item, index) => (
                <Route key={index} path={item.path} element={item.element} />
              ))}
            </Routes>
          </main>
        </>
        :
        <main style={{ background: '#F3F2EA' }}>
          <Routes>
            <Route path={NEWSLETTER_URL} element={<Newsletter />} />
          </Routes>
        </main>
      }
    </>
  );
}

export default App;

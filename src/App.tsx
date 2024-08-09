import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Uploaded1 from "./pages/Uploaded1";
import Uploading from "./pages/Uploading";
import Login1 from "./pages/Login1";
import Uploading1 from "./pages/Uploading1";
import Upload from "./pages/Upload";
import Uploaded from "./pages/Uploaded";
import Upload1 from "./pages/Upload1";
import Login from "./pages/Login";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/uploading1":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/uploading":
        title = "";
        metaDescription = "";
        break;
      case "/upload1":
        title = "";
        metaDescription = "";
        break;
      case "/uploaded":
        title = "";
        metaDescription = "";
        break;
      case "/upload":
        title = "";
        metaDescription = "";
        break;
      case "/login1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Uploaded1 />} />
      <Route path="/uploading1" element={<Uploading />} />
      <Route path="/login" element={<Login1 />} />
      <Route path="/uploading" element={<Uploading1 />} />
      <Route path="/upload1" element={<Upload />} />
      <Route path="/uploaded" element={<Uploaded />} />
      <Route path="/upload" element={<Upload1 />} />
      <Route path="/login1" element={<Login />} />
    </Routes>
  );
}
export default App;

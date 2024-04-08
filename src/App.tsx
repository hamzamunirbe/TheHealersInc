import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FirstLandingPage from "./pages/FirstLandingPage";
import PractitionerLandingPage from "./pages/PractitionerLandingPage";
import ConsumerLandingPage from "./pages/ConsumerLandingPage";
import ConsumerSignIn from "./pages/ConsumerSignIn";
import ConsumerForgotPassword from "./pages/ConsumerForgotPassword";
import ConsumerResetPassword from "./pages/ConsumerResetPassword";

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
      case "/practitioner-landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-sign-in":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-forgot-password":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-reset-password":
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
      <Route path="/" element={<FirstLandingPage />} />
      <Route
        path="/practitioner-landing-page"
        element={<PractitionerLandingPage />}
      />
      <Route path="/consumer-landing-page" element={<ConsumerLandingPage />} />
      <Route path="/consumer-sign-in" element={<ConsumerSignIn />} />
      <Route
        path="/consumer-forgot-password"
        element={<ConsumerForgotPassword />}
      />
      <Route
        path="/consumer-reset-password"
        element={<ConsumerResetPassword />}
      />
    </Routes>
  );
}
export default App;

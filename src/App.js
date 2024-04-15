import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ConsumerForgotPassword from "./pages/consumer-forgot-password";
import ConsumerLandingPage from "./pages/consumer-landing-page";
import ConsumerPreferences from "./pages/consumer-preferences";
import ConsumerPreferences2 from "./pages/consumer-preferences2";
import SearchResultsServices from "./pages/search-results-services";
import ConsumerPreferences4 from "./pages/consumer-preferences4";
import ConsumerPreferences3 from "./pages/consumer-preferences3";
import ConsumerPreferences1 from "./pages/consumer-preferences1";
import SearchResultsPractitioners from "./pages/search-results-practitioners";
import ConsumerResetPassword from "./pages/consumer-reset-password";
import PractitionerDetails from "./pages/practitioner-details";
import ServiceDetails from "./pages/service-details";
import FirstLandingPage from "./pages/first-landing-page";
import PractitionerLandingPage from "./pages/practitioner-landing-page";
import ConsumerSignIn from "./pages/consumer-sign-in";
import ConsumerSignUp from "./pages/consumer-sign-up";

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
      case "/consumer-landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-preferences-05":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-preferences-03":
        title = "";
        metaDescription = "";
        break;
      case "/search-results-services":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-preferences-01":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-preferences-04":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-preferences-02":
        title = "";
        metaDescription = "";
        break;
      case "/search-results-practitioners":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-reset-password":
        title = "";
        metaDescription = "";
        break;
      case "/practitioner-details":
        title = "";
        metaDescription = "";
        break;
      case "/service-details":
        title = "";
        metaDescription = "";
        break;
      case "/first-landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/practitioner-landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-sign-in":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-sign-up":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ConsumerForgotPassword />} />
      <Route path="/consumer-landing-page" element={<ConsumerLandingPage />} />
      <Route
        path="/consumer-preferences-05"
        element={<ConsumerPreferences />}
      />
      <Route
        path="/consumer-preferences-03"
        element={<ConsumerPreferences2 />}
      />
      <Route
        path="/search-results-services"
        element={<SearchResultsServices />}
      />
      <Route
        path="/consumer-preferences-01"
        element={<ConsumerPreferences4 />}
      />
      <Route
        path="/consumer-preferences-04"
        element={<ConsumerPreferences3 />}
      />
      <Route
        path="/consumer-preferences-02"
        element={<ConsumerPreferences1 />}
      />
      <Route
        path="/search-results-practitioners"
        element={<SearchResultsPractitioners />}
      />
      <Route
        path="/consumer-reset-password"
        element={<ConsumerResetPassword />}
      />
      <Route path="/practitioner-details" element={<PractitionerDetails />} />
      <Route path="/service-details" element={<ServiceDetails />} />
      <Route path="/first-landing-page" element={<FirstLandingPage />} />
      <Route
        path="/practitioner-landing-page"
        element={<PractitionerLandingPage />}
      />
      <Route path="/consumer-sign-in" element={<ConsumerSignIn />} />
      <Route path="/consumer-sign-up" element={<ConsumerSignUp />} />
    </Routes>
  );
}
export default App;

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/Signin";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      {(location.pathname !== "/sign-up" && location.pathname !== "/sign-in") && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<Signin />} />
      </Routes>
      {(location.pathname !== "/sign-up" && location.pathname !== "/sign-in") && <Footer />}
    </>
  );
}

export default App;

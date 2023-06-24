import { Route, Router, Routes } from "react-router-dom";
import ThankYouPage from "./components/ThankYou";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/thank-you/:code" element={<ThankYouPage />} />
      </Routes>
    </>
  );
}

export default App;

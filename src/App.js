import React, { useEffect, useState } from "react";
import "./assets/scss/default.scss";
import HomePage from "./pages/homepage/homepage.component";
import LoadingPage from "./pages/loading-page/loading-page.component";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);
  return <div className="App">{loading ? <LoadingPage /> : <HomePage />}</div>;
}

export default App;

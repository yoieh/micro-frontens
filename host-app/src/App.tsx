// In the host-app, dynamically import micro frontends
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const Header = lazy(() => import("headerApp/Header"));
// const HomeContent = lazy(() => import('http://localhost:3002/home.js'));
// const InfoContent = lazy(() => import('http://localhost:3003/info.js'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      TEST
      <Router></Router>
    </div>
  );
  // return (
  //   <Router>

  //     <Suspense fallback={<div>Loading...</div>}>

  //     <Routes>
  //         <Route path="/" element={<HomeContent />} />
  //         <Route path="/info" element={<InfoContent />} />
  //       </Routes>
  //     </Suspense>
  //   </Router>
  // );
}

export default App;

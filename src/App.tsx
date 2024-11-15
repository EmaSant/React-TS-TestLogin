import Login from "./components/Login/Login";
import ProtectedRoute from "./components/ProtectedPage/ProtectedRoute";
import Dashboard from "./components/Dashboard/Dashboard";

//React Router to allow page browsing
import { BrowserRouter, Route, Routes } from "react-router-dom";
//There will be two pages, Login and Dashboard, dashboard is protected and not accessible until Access token is generated through a succesfull login.
function App() {
  return (
    <>
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Routes>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileSetup from "./ui/pages/profileSetup/profileSetup";
import Page from "./ui/pages/homePage/Page";
import ProfileSetting from "./ui/components/profileSetting/ProfileSetting";
const Profile = React.lazy(() => import("./ui/pages/profileSetup/profileSetup"));
const Home = React.lazy(() => import("./ui/pages/homePage/Home"));

function PrivateRoute() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                {/* <Profile /> */}
                <ProfileSetup/>
              </React.Suspense>
            }
          />
          <Route
            path="/dashboard"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                {/* <Dashboard /> */}
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path="/page"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                {/* <Dashboard /> */}
                <Page />
              </React.Suspense>
            }
          />
          <Route
            path="/profile_setting"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                {/* <Dashboard /> */}
                <ProfileSetting/>
              </React.Suspense>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default PrivateRoute;

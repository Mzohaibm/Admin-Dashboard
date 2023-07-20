import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import BasicElements from "./FormElements/BasicElements/BasicElements";
import Buttons from "./BasicUiElements/Buttons/Buttons";
import Typography from "./BasicUiElements/Typography/Typography";
import BasicTables from "./Tables/BasicTables/BasicTables";
import Material from "./Icons/Material/Material";
import Charts from "./Charts/Charts";
import Login from "./UserPages/Login/Login";
import Register from "./UserPages/Register/Register";
import LockScreen from "./UserPages/Lockscreen/LockScreen";
import Error404 from "./ErrorPages/404/error404";
import Error500 from "./ErrorPages/500/Error500";
import BlankPage from "./GeneralPages/BlankPage";
import Documentation from "./Documentation/Documentation";

const Sidebardata = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/basic-ui/buttons" element={<Buttons />} />
        <Route path="/basic-ui/typography" element={<Typography />} />
        <Route
          path="/form-elements/basic-elements"
          element={<BasicElements />}
        />
        <Route path="/tables/basic" element={<BasicTables />} />
        <Route path="/icons/material" element={<Material />} />
        <Route path="/charts/charts-js" element={<Charts />} />
        <Route path="/charts/charts-js" element={<Charts />} />
        <Route path="/user-pages-login" element={<Login />} />
        <Route path="/user-pages-register" element={<Register />} />
        <Route path="/user-pages-lockscreen" element={<LockScreen />} />
        <Route path="/error-pages-404" element={<Error404 />} />
        <Route path="/error-pages-500" element={<Error500 />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/general-pages" element={<BlankPage />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
    </div>
  );
};

export default Sidebardata;

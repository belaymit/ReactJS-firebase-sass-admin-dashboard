import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/home/Home'
import Login from "./pages/login/Login";
import SidebarList from "./pages/list/SidebarList"
import Single from './pages/single/Single'
import New from "./pages/new/New"
import UserForm from "./components/userform/UserForm";
import { productInputs, userInputs } from "./formSource";
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import './style/dark.scss'
import { useContext} from "react";
import { DarkModeContext } from "./components/context/darkModeContext";


function App() {
  
  const {darkmode} = useContext(DarkModeContext);
  
  return (
    <div className={darkmode ? "app dark": "app"}>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
              <Route path="users">
                <Route index element={<SidebarList/>}/>
                <Route path=":userId" element = {<Single/>}/>
                <Route path ="new" 
                      element={<New inputs={userInputs} title="Add New User" icon={<GroupAddOutlinedIcon/>}/>}/>
               
                <Route path="registration" element={<UserForm/>}/>
              </Route>
              <Route path="products">
                <Route index element={<SidebarList/>}/>
                <Route path=":productId" element={<Single/>}/>
                <Route path ="new" 
                      element={<New inputs = {productInputs} title="Add Products" icon={<PrecisionManufacturingOutlinedIcon/>}/>}/>
              </Route>
            </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;

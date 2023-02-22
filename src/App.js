import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import Navbar from './Base';
import Login from './Login';
import Register from './Register';
import RegisterMgr from './RegisterMgr';
import LoginMgr from './LoginMgr';
import SelReg from './SelReg';
import SelLog from './SelLog';
import { useState } from 'react';
import NeedLogin from './NeedLogin';
import GetOnOff from './GetOnOff';
import ConnMgr from './ConnMgr';

function App() {
  const [mode, setMode] = useState('visit');
  return (
    <div className='App'>
      {((sessionStorage.getItem("user-info") != null) && (sessionStorage.getItem("user-info") != "undefined")) 
      ? <Navbar name={sessionStorage.getItem("name")}/> : <Navbar name='0x00'/>}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/need-login" element={<NeedLogin/>}/>
        <Route path="/select-login" element={<SelLog/>}/>
        <Route path="/select-register" element={<SelReg/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/login_mgr" element={<LoginMgr/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/register_mgr" element={<RegisterMgr/>}/>
        <Route path="/manager" element={<GetOnOff/>}/>
        <Route path="/conn-mgr" element={<ConnMgr/>}/>
      </Routes>
    </div>
  );
}

export default App;

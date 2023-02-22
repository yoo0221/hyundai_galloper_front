import { Link } from "react-router-dom";
import Navbar from "./Base";
const Home = () => {
    if((sessionStorage.getItem("user-info") != null) && (sessionStorage.getItem("user-info") != "undefined")){
        return (
            <div className="container">
            <div className="d-flex justify-content-center mt-5">
            <img id="off" className="align-items-center opacity-100 on-off" src={process.env.PUBLIC_URL + "/img/main_logo.png"}/>
            </div>
            <div className="container px-5">
            <Link to='/conn-mgr' className="form-control login-btn my-5 p-0"><button className="form-control login-btn m-0 p-2">관리자 등록하기</button></Link>
            </div>
        </div>
        );
    }
    else{
        window.location.replace('/need-login')
        return;
    }
    
   
}

export default Home;
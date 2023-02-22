import { Link } from "react-router-dom";
function SelReg(){
    return(
        <div className="container">
            <div className="my-5 py-5">

            </div>
            <div className="container justify-content-center mt-5">
                <Link to='/register_mgr' className="row px-3 py-1 mx-5 text-decoration-none"><button className="p-2 login-btn">관리자로 회원가입</button></Link>
                <Link to='/register' className="row px-3 py-1 mx-5 text-decoration-none"><button className="p-2 register-btn">학부모로 회원가입</button></Link>
            </div>
        </div>
    );
}

export default SelReg;
import { Link } from "react-router-dom";
function SelLog(){
    return(
        <div className="container">
            <div className="my-5 py-5">

</div>
            <div className="container justify-content-center mt-5">
                <Link to='/login_mgr' className="row px-3 py-1 mx-5 text-decoration-none"><button className="p-2 login-btn">관리자로 로그인</button></Link>
                <Link to='/login' className="row px-3 py-1 mx-5 text-decoration-none"><button className="p-2 register-btn">학부모로 로그인</button></Link>
            </div>
        </div>
    );
}

export default SelLog;
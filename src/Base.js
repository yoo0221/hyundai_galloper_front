import { Link } from "react-router-dom"

function Navbar(props) {
    if(props.name == "0x00"){
        // return (
        //     <div className="container">
        //         <div className="d-flex justify-content-center mt-5">
        //         <img className="align-items-center" src={process.env.PUBLIC_URL + "/img/main_logo.png"}/>
        //         </div>
        //         <div className="container row d-flex justify-content-center mx-5">
        //             <h5 className="mt-5 fw-bold">당신의 아이가</h5>
        //             <h5 className="fw-bold">안전하도록,</h5>
        //             <h5 className="my-5 fw-bold">붕붕이 알려드립니다.</h5>
        //         </div>
        //         <Link to='/select-login' className="row px-3 py-1 mx-5 text-decoration-none"><button className="p-2 login-btn">로그인</button></Link>
        //         <Link to='/select-register' className="row px-3 py-1 mx-5 text-decoration-none"><button className="p-2 register-btn">회원가입</button></Link>
        //     </div>
        // )
        return;
    }
    else{
        return (
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/"><img className="home-btn" src={process.env.PUBLIC_URL + "/img/main_home.png"} alt=""/></Link>
                    <div className="d-flex">
                        {props.name + '님 환영합니다.'}
                        <Link className="ms-2 text-decoration-none text-secondary" to='' onClick={()=>{
                            sessionStorage.removeItem('name');
                            sessionStorage.removeItem('user-info');
                            window.location.replace('/');
                        }}> <button className="logout-btn"> 로그아웃</button></Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
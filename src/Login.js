import axios from "axios";
import { useState } from "react";
import {Link} from "react-router-dom";
function Login(){
    function login(){
        console.log(userId, password)
        axios
        .post("http://13.125.105.227:8080/member/login",{
            userId:userId,
            password:password
        })
        .then((response) => {
            console.log(response.data);
            if(response.data.message != "아이디 비밀번호 불일치"){
                sessionStorage.setItem("user-info", response.data.token);
                sessionStorage.setItem("name", response.data.name);
                sessionStorage.setItem("flag", response.data.flag);
                window.location.replace('/');
            }
            else{
                window.location.replace('/login');
            }
        })
        .catch((error)=>{
            console.log(error);
})
    }
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/"><img src="" alt=""/>붕붕</Link>
                </div>
            </nav>
            <div class="card m-4">
                <div class="card-body justify-content-center text-center">
                    <h2 className="fw-bold my-5">학부모로 로그인합니다.</h2>
                    <div className="container justify-content-center">
                        <div className="row">
                            <label for='userId' className="col-4 align-middle mt-3">아이디: </label>
                            <input type='text' name='userId' id='userId' className="form-control my-2 col" placeholder="아이디를 입력하세요" onChange={(e)=>setUserId(e.target.value)}/>
                        </div>
                    </div>
                    <div className="container justify-content-center">
                        
                        <div className="row">
                    <label for='password' className="col-4 align-middle mt-3">비밀번호: </label>
                    <input type='text' name='password' id='password' className="form-control my-2 col" placeholder="비밀번호를 입력하세요" onChange={(e)=>setPassword(e.target.value)}/>
                    </div></div>
                    
                    <div className="container px-5">
                    <button className="form-control login-btn my-5 p-2" onClick={login}>로그인</button>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
            붕붕이 처음이신가요? <Link to='/select-register' className="mx-4">회원가입 하러가기</Link>
            </div>
        </div>
    );
}

export default Login
import axios from "axios";
import { useState } from "react";
import {Link} from "react-router-dom";
function Register(){
    function register(){
        console.log(userId, password, name, telephone, childName, b_type)
        axios
        .post("http://13.125.105.227:8080/member/save",{
            userId:userId,
            password:password,
            name:name,
            telephone:telephone,
            childName:childName,
            b_type:b_type
        })
        .then((response) => {
            console.log(response.data);
            console.log(response.data.message);
            if(response.data.message == '회원가입이 완료되었습니다.'){
                window.location.replace('/login')
            }
            else{
                window.location.replace('/register')
            }
        })
        .catch((error)=>{
            console.log(error);
})
    }
    // 
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [telephone, setTelephone] = useState("");
    const [childName, setchildName] = useState("");
    const [b_type, setB_type] = useState("");
    
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/"><img src="" alt=""/>붕붕</Link>
                </div>
            </nav>
            <div class="card m-4">
                <div class="card-body justify-content-center text-center">
                    <h2 className="fw-bold my-5">학부모 회원가입</h2>
                    <div className="container justify-content-center">
                        <div className="row">
                            <label for='name' className="col-4 align-middle mt-3">이름: </label>
                            <input type='text' name='name' id='name' className="form-control my-2 col" placeholder="부모 본인의 이름을 입력하세요" onChange={(e)=>setName(e.target.value)}/>
                        </div>
                    </div>
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
                    <div className="container justify-content-center">
                        <div className="row">
                    <label for='tel' className="col-4 align-middle mt-3">전화번호: </label>
                    <input type='tel' name='tel' id='tel' className="form-control my-2 col" placeholder="010-0000-0000" onChange={(e)=>setTelephone(e.target.value)}/>
                    </div>
                    </div>
                    <div className="container justify-content-center">
                        <div className="row">
                    <label for='childName' className="col-4 align-middle mt-3">자녀 이름: </label>
                    <input type='text' name='childName' id='childName' className="form-control my-2 col" placeholder="자녀의 이름을 입력하세요" onChange={(e)=>setchildName(e.target.value)}/>
                    </div>
                    </div>
                    <div className="container justify-content-center">
                        <div className="row">
                    <label for='b_type' className="col-4 align-middle mt-3">자녀 혈액형: </label>
                    <select name='b_type' id='b_type' className="form-control my-2 col" onChange={(e)=>setB_type(e.target.value)}>
                        <option value="">선택</option>
                        <option value="Rh+ A">Rh+ A</option>
                        <option value="Rh- A">Rh- A</option>
                        <option value="Rh+ B">Rh+ B</option>
                        <option value="Rh- B">Rh- B</option>
                        <option value="Rh+ O">Rh+ O</option>
                        <option value="Rh- O">Rh- O</option>
                        <option value="Rh+ AB">Rh+ AB</option>
                        <option value="Rh- AB">Rh- AB</option>
                    </select>
                    </div>
                    </div>
                    <div className="container px-5">
                    <button className="form-control login-btn my-5 p-2" onClick={register}>회원가입</button>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
            이미 회원이신가요? <Link to='/register_mgr' className="mx-4">로그인 하러가기</Link>
            </div>
        </div>
    );
}

export default Register
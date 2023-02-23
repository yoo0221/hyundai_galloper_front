import axios from "axios";
import { useState } from "react";
function ConnMgr(){
    function connMgr(){
        console.log(userId)
        let session_Id=sessionStorage.getItem("userId")
        console.log(session_Id);
        axios
        .put("http://13.125.105.227:8080/member/regManager/"+session_Id, {
            userId: userId
        })
        .then((response) => {
            console.log(response.data);
            if(response.data.message != "관리자 등록이 완료되었습니다."){
                window.location.replace('/conn-mgr');
            }
            else{
                window.location.replace('/');
            }
        })
        .catch((error)=>{
            console.log(error);
})
    }
    const [userId, setUserId] = useState("");

    return(
        <div class="card m-4">
            <div class="card-body justify-content-center text-center">
                <h2 className="fw-bold my-5">관리자로 등록합니다.</h2>
                <div className="container justify-content-center">
                    <div className="row">
                        <label for='userId' className="col-4 align-middle mt-3">관리자 ID: </label>
                        <input type='text' name='userId' id='userId' className="form-control my-2 col" placeholder="아이디를 입력하세요" onChange={(e)=>setUserId(e.target.value)}/>
                    </div>
                </div>
                
                <div className="container px-5">
                <button className="form-control login-btn my-5 p-2" onClick={connMgr}>등록하기</button>
                </div>
            </div>
        </div>
    );
}

export default ConnMgr;
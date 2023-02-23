import { Link } from "react-router-dom";
import Navbar from "./Base";
const Home = () => {
    if((sessionStorage.getItem("user-info") != null) && (sessionStorage.getItem("user-info") != "undefined")){
        if(sessionStorage.getItem("flag")=="0"){
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
            return(
                <div>
                 {/* <Navbar></Navbar> */}
                 <table className='table m-5'>
                     <thead className='bg-white'>
                         <tr>
                             <th scope='col'>이름</th>
                             <th scope='col'>아이디</th>
                             <th scope='col'>전화번호</th>
                             <th scope='col'>자녀이름</th>
                             <th scope='col'>혈액형</th>
                             <th scope='col'>승/하차</th>
                         </tr>
                     </thead>
                     <tbody>
                         <tr>
                             <th scope="row">이은지</th>
                             <td>test</td>
                             <td>01012345678</td>
                             <td>여다영</td>
                             <td>Rh+ A</td>
                             <td><button>승차</button></td>
                         </tr>
                         <tr>
                             <th scope="row">여다영</th>
                             <td>test2</td>
                             <td>01088888888</td>
                             <td>이은지</td>
                             <td>Rh+ B</td>
                             <td><button>승차</button></td>
                         </tr>
                         <tr>
                             <th scope="row">이태곤</th>
                             <td>test3</td>
                             <td>01077777777</td>
                             <td>유준호</td>
                             <td>Rh+ O</td>
                             <td><button>하차</button></td>
                         </tr>
                         <tr>
                             <th scope="row">유준호</th>
                             <td>test4</td>
                             <td>01033333333</td>
                             <td>이태곤</td>
                             <td>Rh+ AB</td>
                             <td><button>하차</button></td>
                         </tr>
                     </tbody>
                 </table>
                </div> 
             );
        }
    }
    else{
        window.location.replace('/need-login')
        return;
    }
    
   
}

export default Home;
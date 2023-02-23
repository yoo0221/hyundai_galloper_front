import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
    const token = sessionStorage.getItem("user-info");
    const userId = sessionStorage.getItem("userId");
    const [memlist, setMemlist] = useState([]);
    const [stat, setStat] = useState();

    const fetchData = async() => {
        await axios.get('http://13.125.105.227:8080/manager/members/'+token
        ).then((response)=>{
            setMemlist(response.data);
        });
    }
    
    const getData = async() => {
        await axios.get('http://13.125.105.227:8080/member/status/'+userId
        ).then((response)=>{
            setStat(response.data.status);
        });
    }

    useEffect(async() => {
        fetchData();
        getData();
    },[])

    // setMembody(memlist.map(mem => (
    //     <Member mem={mem} key={mem.token}/>
    // )));
    console.log(memlist);

    const list = []

    for(let i =0;i<memlist.length;i++){
        // list.push(<Member mem={memlist[i]} key={memlist[i].token}></Member>);
        // if(memlist[i].status){
        //     setMethod({array: [...method.myArray, getoff]})
        // }
        // else{
        //     setMethod({array: [...method.myArray, geton]})
        // }
        list.push(
            <tr>
                <th scope='row'>{memlist[i].name}</th>
                <td>{memlist[i].userId}</td>
                <td>{memlist[i].telephone}</td>
                <td>{memlist[i].childName}</td>
                <td>{memlist[i].b_type}</td>
                {/* <td><button status={memlist[i].status} key={i} id={memlist[i].token} onClick={memlist[i].status?getoff:geton}>{memlist[i].status?"승차":"하차"}</button></td> */}
                <td id='on-off'>{memlist[i].status?"승차":"하차"}</td>
                <td><button status={memlist[i].status} key={i} id={memlist[i].token} onClick={geton}>승차</button></td>
                <td><button status={memlist[i].status} key={i} id={memlist[i].token} onClick={getoff}>하차</button></td>
            </tr>
        );
    }

    if((sessionStorage.getItem("user-info") != null) && (sessionStorage.getItem("user-info") != "undefined")){
        if(sessionStorage.getItem("flag")!="0"){
            return(
                <div>
                 <table className='table m-5'>
                     <thead className='bg-white'>
                         <tr>
                             <th scope='col'>이름</th>
                             <th scope='col'>아이디</th>
                             <th scope='col'>전화번호</th>
                             <th scope='col'>자녀이름</th>
                             <th scope='col'>혈액형</th>
                             <th scope='col'>승/하차 상태</th>
                             <th scope='col'>승차</th>
                             <th scope='col'>하차</th>
                         </tr>
                     </thead>
                     <tbody id="member-list">
                        {list}
                    </tbody>
                 </table>
                </div> 
             );
        }
        else{
            // const userId=sessionStorage.getItem('userId');
            // let stat;
            // axios.get('http://13.125.105.227:8080/member/status/'+userId
            // ).then((response)=>{
            //     stat = response.data.status;
            // });
            console.log(stat)
            if(stat){
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
                return (
                    <div className="container">
                    <div className="d-flex justify-content-center mt-5">
                    <img id="off" className="align-items-center opacity-50 on-off" src={process.env.PUBLIC_URL + "/img/main_logo.png"}/>
                    </div>
                    <div className="container px-5">
                    <Link to='/conn-mgr' className="form-control login-btn my-5 p-0"><button className="form-control login-btn m-0 p-2">관리자 등록하기</button></Link>
                    </div>
                </div>
                );
            }
            
        }
        }
    else{
        window.location.replace('/need-login')
        return;
    }

    async function getoff(e){
        let token = e.target.id;
        await axios
        .post("http://13.125.105.227:8080/manager/fpregister/getoff/"+token, { })
        .then((response) => {
            console.log(response.data.status);
        })
        .catch((error)=>{
            console.log(error);
        })
        document.getElementById("on-off").innerHTML = "하차";

        // e.target.innerText="하차";
        // let items = [...method.myArray];
        // let item = {...items[e.target.key]}
        // item = geton;
        // items[e.target.key] = item
        // setMethod(items); 
    }
    
    async function geton(e){
        let token = e.target.id;
        await axios
        .post("http://13.125.105.227:8080/manager/fpregister/geton/"+token, { })
        .then((response) => {
            console.log(response.data.status);
        })
        .catch((error)=>{
        console.log(error);
        })
        document.getElementById("on-off").innerHTML = "승차";
        // e.target.innerText="승차";
        // let items = [...method.myArray];
        // let item = {...items[e.target.key]}
        // item = getoff;
        // items[e.target.key] = item
        // setMethod(items); 
    }
}

export default Home;

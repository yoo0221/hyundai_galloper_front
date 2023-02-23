import Navbar from "./Base";

function Accident(){
    return (
        <div>
                    <Navbar/>
            <table className='table m-5'>
                <thead className='bg-white'>
                    <tr>
                        <th scope='col'>이름</th>
                        <th scope='col'>아이디</th>
                        <th scope='col'>전화번호</th>
                        <th scope='col'>자녀이름</th>
                        <th scope='col'>혈액형</th>
                        <th scope='col'>승/하차 상태</th>
                    </tr>
                </thead>
                <tbody id="member-list">
                <tr>
                    <th scope='row'>이은지</th>
                    <td>eunji</td>
                    <td>01012345678</td>
                    <td>여다영</td>
                    <td>Rh+ B</td>
                    {/* <td><button status={memlist[i].status} key={i} id={memlist[i].token} onClick={memlist[i].status?getoff:geton}>{memlist[i].status?"승차":"하차"}</button></td> */}
                    <td id='on-off'>하차</td>
                    {/* <td><button status={memlist[i].status} key={i} id={memlist[i].token} onClick={geton}>승차</button></td>
                    <td><button status={memlist[i].status} key={i} id={memlist[i].token} onClick={getoff}>하차</button></td> */}
                </tr>
                </tbody>
            </table>
        </div> 
    );
}

export default Accident;
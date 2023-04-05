import { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

const Hapus = () => {

  const navigate = useNavigate();
  let {json} = useParams();
  console.log(json);
  
  let handleSubmit = async (e) => {
    try {
      let res = await fetch("http://127.0.0.1:8000/api/del/" + json, {
        method: "GET",
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {    
    handleSubmit();
    navigate('/dashboard')
  })
  // return (
  //   <div className="container">
  //     <center><h1 className='container'>DELETE from LOWKER</h1></center>

  //     <div className="message">{message ? <p>{message}</p> : null}</div>
  //   </div>
  // );
}

export default Hapus;
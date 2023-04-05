import React, { useState } from 'react';
import {Form, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const Sisipan = () => {

  const [nama, setNama] = useState("");
  const [desk, setDesk] = useState("");
  const [tpm, setTpm] = useState("");
  const [opn, setOpn] = useState("");
  const [cls, setCls] = useState("");
  const [qt, setQt] = useState("");
  const [message, setMessage] = useState("");
  
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://127.0.0.1:8000/api/ins/" + JSON.stringify({
        nama : nama,
        desk : desk,
        tpm : tpm,
        opn : opn,
        cls : cls,
        qt : qt,
      }), {
        method: "GET",
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <center><h1 className='container'>INSERT to LOWKER</h1></center>
      <Form className="container" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="nama">
          <Form.Label>Nama Lowongan</Form.Label>
          <Form.Control type="text" placeholder="Nama" value={nama} onChange={(e) => setNama(e.target.value)}/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="deskripsi">
          <Form.Label>Deskripsi Lowongan</Form.Label>
          <Form.Control type="text" placeholder="Deskripsi" value={desk} onChange={(e) => setDesk(e.target.value)}/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="deskripsi">
          <Form.Label>Tingkat Pendidikan Minimal</Form.Label>
          <Form.Control type="text" placeholder="SD/SMP/SMA/D1/D2/D3/S1 dst" value={tpm} onChange={(e) => setTpm(e.target.value)}/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="open">
          <Form.Label>Tanggal Dibuka</Form.Label>
          <Form.Control type="datetime-local" placeholder="YYYY-MM-DD HH:ii:ss" value={opn} onChange={(e) => setOpn(e.target.value)}/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="close">
          <Form.Label>Tanggal Ditutup</Form.Label>
          <Form.Control type="datetime-local" placeholder="YYYY-MM-DD HH:ii:ss" value={cls} onChange={(e) => setCls(e.target.value)}/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="kuota">
          <Form.Label>Kuota</Form.Label>
          <Form.Control type="text" placeholder="Jumlah Kuota" value={qt} onChange={(e) => setQt(e.target.value)}/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </Form>
    </div>
  );

  // fetch("http://127.0.0.1:8000/api/del/", {
  //   method: 'POST',    
  //   mode: 'cors', 
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   search: JSON.stringify({
  //     id: '4',
  //   })
  // })

  // const [lowkers, setLowker] = useState([])

  // const fetchData = async () => {
  //   const response = await fetch("http://127.0.0.1:8000/api/readlowker")
  //   const data = await response.json()
  //   setLowker(data)
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  // return (
  //   <Table striped bordered hover>
  //     <thead>
  //       <tr>
  //         <th>#</th>
  //         <th>Nama</th>
  //         <th>Deskripsi</th>
  //         <th>Tingkat Pendidikan Minimal</th>
  //         <th>Tanggal Dibuka</th>
  //         <th>Tanggal Ditutup</th>
  //         <th>Kuota</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {lowkers.length > 0 && 
  //           lowkers.map(val => (
  //             <tr key={val.id}>
  //               <td>{val.id}</td>
  //               <td>{val.nama}</td>
  //               <td>{val.deskripsi}</td>
  //               <td>{val.tpm}</td>
  //               <td>{val.open}</td>
  //               <td>{val.close}</td>
  //               <td>{val.kuota}</td>
  //           </tr>
  //           )
  //       )}
  //    </tbody>
  //   </Table>
  // )
}

export default Sisipan;
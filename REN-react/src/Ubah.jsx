import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const Ubah = () => {
  const [nama, setNama] = useState("");
  const [desk, setDesk] = useState("");
  const [tpm, setTpm] = useState("");
  const [opn, setOpn] = useState("");
  const [cls, setCls] = useState("");
  const [qt, setQt] = useState("");
  const [message, setMessage] = useState("");

  let {json} = useParams();
  // json = JSON.parse(json);
  // console.log(json);  
  // console.log(JSON.parse(json));  
  
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://127.0.0.1:8000/api/upd/" + JSON.stringify({
        id : JSON.parse(json).id,
        nama : nama,
        desk : desk,
        tpm : tpm,
        opn : opn,
        cls : cls,
        qt : qt,
      }), {
        method: "GET",
      });
      // let resJson = 
      await res.json();
      if (res.status === 200) {
        setMessage("Lowker updated successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {    
    const fetchData = async () => {
      const response = await fetch(`http://127.0.0.1:8000/api/selectlowker/${json}`)
      const data = await response.json()
      // setLowker(data)
      setNama(data.nama)
      setDesk(data.deskripsi)
      setTpm(data.tpm)
      setOpn(data.open)
      setCls(data.close)
      setQt(data.kuota)
    }

    fetchData();
  }, [json])

  return (
    <div className="container">
      <center><h1 className='container'>UPDATE to LOWKER</h1></center>
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

        <center>
          <Button variant="primary" type="submit" size="lg">
            Submit
          </Button>
          &nbsp;
          <Button href="/dashboard" variant="outline-success" size="lg"> Kembali </Button>
        </center>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </Form>
    </div>
  );
}

export default Ubah;
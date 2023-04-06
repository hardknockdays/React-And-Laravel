import React, { useState, useEffect } from 'react';
import {Table, Button} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BsDatabaseAdd, BsDatabaseFillX, BsDatabaseFillGear } from "react-icons/bs";

const Dashboard = () => {
  const [lowkers, setLowker] = useState([])
  var urut = 1

  const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/readlowker")
    const data = await response.json()
    setLowker(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="container">
      <center><h1 className='container'>LIST LOWKER</h1></center>
      
      <Button href="/sisipan" variant="outline-primary" size="lg"> <BsDatabaseAdd /> Add </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nama</th>
            <th>Deskripsi</th>
            <th>Tingkat Pendidikan Minimal</th>
            <th>Tanggal Dibuka</th>
            <th>Tanggal Ditutup</th>
            <th>Kuota</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {lowkers.length > 0 && 
              lowkers.map(val => (
                <tr key={val.id}>
                  <td>{urut++}</td>
                  <td>{val.nama}</td>
                  <td>{val.deskripsi}</td>
                  <td>{val.tpm}</td>
                  <td>{val.open}</td>
                  <td>{val.close}</td>
                  <td>{val.kuota}</td>
                  <td>
                    <Button href={'ubah/' + JSON.stringify({id : val.id})}  variant="outline-primary" size="lg"> <BsDatabaseFillGear /> Upd </Button>
                    <br></br>
                    <Button href={'hapus/' + JSON.stringify({id : val.id})}  variant="outline-danger" size="lg"> <BsDatabaseFillX /> Del </Button>
                </td>
              </tr>
              )
          )}
      </tbody>
      </Table>
    </div>
  )
}

export default Dashboard;
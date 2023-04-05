import React, { useState, useEffect } from 'react';
import {Table} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const Baca = () => {
  const [lowkers, setLowker] = useState([])

  const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/readlowker")
    const data = await response.json()
    setLowker(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
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
        </tr>
      </thead>
      <tbody>
        {lowkers.length > 0 && 
            lowkers.map(val => (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.nama}</td>
                <td>{val.deskripsi}</td>
                <td>{val.tpm}</td>
                <td>{val.open}</td>
                <td>{val.close}</td>
                <td>{val.kuota}</td>
            </tr>
            )
        )}
     </tbody>
    </Table>
  )
}

export default Baca;
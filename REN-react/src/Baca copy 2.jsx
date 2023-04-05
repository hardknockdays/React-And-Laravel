import React, { useState, useEffect } from 'react';
// const express = require('express');
// const cors = require('cors')
import {Table} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

let tablevalue = {}
// app.get('/', (req, res) => {
//     res.send('Welcome to CORS server 😁')
// })
// app.get('/cors', (req, res) => {
//     res.send('This has CORS enabled 🎈')
// })
// app.listen(8080, () => {
//     console.log('listening on port 8080')
// })
// app.use(cors())

function Baca() {

  fetch("http://127.0.0.1:8000/api/readlowker")
  .then(response => response.json())
  .then((jsonData) => {
    // jsonData is parsed json object received from url
    // console.log(jsonData)
    tablevalue = jsonData
  })
  .catch((error) => {
    // handle your errors here
    console.error(error)
  })

  // const [data, setData] = useState({});
  // // const datalowker = {};
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(
  //       "http://127.0.0.1:8000/api/readlowker"
  //     );
  //     const parsed = await response.json();
  //     setData(parsed);
  //   })();
  // }, []);



  // return (
  //   // console.log(data)
  //   // <div>
  //   //   <pre>
  //   Object.entries(data).map((postData) => (
  //         console.log(postData)
  //       ))
  //   //     </pre>
  //   // </div>
  // );
  // return (
  //   <div>
  //     <pre>{console.log(data)}</pre>
  //   </div>
  // );
  // return (
  //   <div>
  //     <pre>{JSON.stringify(data, null, 2)}</pre>
  //   </div>
  // );

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
        {    
          console.log(tablevalue)
          // tablevalue.map((postData) => (
          //   console.log(postData)           
          // // <tr>
          // //   <td>{postData.id}</td>
          // //   <td>{postData.nama}</td>
          // //   <td>{postData.deskripsi}</td>
          // // </tr>
          // ))
        }
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Baca;
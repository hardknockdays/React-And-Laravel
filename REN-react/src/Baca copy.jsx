import React from 'react';
import {Table} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function Baca() {
  state = {
    lowker: [],
    error: null
  };


  getFetchUsers() {
    this.setState({
        loading: true
    }, () => {
        fetch("http://localhost:3000/posts").then(res => res.json()).then(result => this.setState({
            lowker: result
        })).catch(console.log);
    });
  }

  const DisplayData=JsonData.map(
    (info)=>{
        return(
            <tr>
                <td>{info.id}</td>
                <td>{info.name}</td>
                <td>{info.city}</td>
            </tr>
        )
    }
  )

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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Baca;
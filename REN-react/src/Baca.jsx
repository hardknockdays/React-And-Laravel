import React, { useState, useEffect } from 'react';
const express = require('express');
import {Table} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const app = express();
app.get('/', (req, res) => {
    res.send('Welcome to CORS server 😁')
})
app.get('/cors', (req, res) => {
    res.send('This has CORS enabled 🎈')
})
app.listen(8080, () => {
    console.log('listening on port 8080')
})

function Baca() {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "http://127.0.0.1:8000/readlowker"
      );
      const parsed = await response.json();
      setData(parsed);
    })();
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Baca;
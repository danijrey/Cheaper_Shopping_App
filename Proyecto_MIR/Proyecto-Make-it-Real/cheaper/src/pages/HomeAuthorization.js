import React, { useEffect } from 'react';
import axios from 'axios';
import Home from '../components/Home.js'


  function HomeAuthorization({ history }) {

    useEffect(() => {
      const token = localStorage.getItem('token');
      axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/products',
        headers: {
          'Authorization': token
        }
      })
        .then(({ data }) => console.log(data))
        .catch(error => {
          localStorage.removeItem('token');
          history.push('/');
        })
    }, [history]);

    return (
      <Home/>
    );
  }

  export default HomeAuthorization;

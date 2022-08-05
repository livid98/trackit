import axios from 'axios';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import logo from "./Assets/Group 8.png"
export default function Login(){
 const [email,setEmail]  = useState('');
 const [password, setPassword] = useState('');
 const navigate = useNavigate();
 function Enviarform(e){
 e.preventDefault();  
  const obj = {
    email,
    password,
  }  
  const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', obj);
  promise.then(res=>{console.log(res.data)
  navigate('/hoje');
})
 }
return (  
 <Container>  
<img src={logo} alt=""/>
<form onSubmit={Enviarform}>
<input type="email" placeholder="email" onChange={ (e) => setEmail(e.target.value)} value={email} required />
<input type="password" placeholder="senha" onChange={ (e) => setPassword(e.target.value)} value={password} required />
<button onClick={Enviarform}>Entrar</button>
</form>
</Container> 
)  
}

const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: #FFFFFF;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    font-family: 'Lexend Deca', sans-serif;
    img{
        padding-top: 50px;
        padding-bottom: 32px;
       
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
       justify-content:center;
    }
    input {
        width: 100%;
        height: 45px;
        border: 1px solid #D4D4D4;
        box-sizing: border-box;
        margin-bottom: 10px;
        padding-left: 10px;
        font-size: 20px;
        font-weight: 400;
        text-align: left;
        border-radius: 5px;

      }
     
	input:focus {
        outline-color: red;
      }

      input::placeholder {
        color: #DBDBDB;
      }
      button {
        width: 225px;
        height: 42px;
        border-radius: 3px;
        margin-top: 20px;
        color: rgba(255, 255, 255, 1);
        background-color:  #52B6FF;
        border: none;
        cursor: pointer;
        font-size: 20px;
        font-weight: 400;
      }
`;
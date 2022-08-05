
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Hoje from './Hoje';
export default function App(){
return (
 <BrowserRouter>
 <Routes>
 <Route path="/" element={<Login />} />
 <Route path="/hoje" element={<Hoje />} />
 </Routes>
 </BrowserRouter>
);

}
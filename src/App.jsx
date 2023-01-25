import Main from './pages/Main';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import UpdateProduct from './pages/UpdateProduct';

function App(){
  return(
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='/products' />}/>
        <Route path ='/products' element={<Main/>} />
        <Route path ='/products/:id' element={<ProductDetails/>} />
        <Route path ='/products/edit/:id' element={<UpdateProduct/>}/>
      </Routes>
    </div>
  )
}
export default App;
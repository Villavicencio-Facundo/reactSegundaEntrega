import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import ItemListContainer from './components/ItemListContainer';
import NotFound from './components/NotFound';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/CartProvider';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
      <BrowserRouter basename="/reactSegundaEntrega">
        <Layout>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

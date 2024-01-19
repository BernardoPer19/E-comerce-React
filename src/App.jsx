import  './App.css'
import Header from './components/Header';
import LaVenta from './components/LaVenta';
import Producto from './components/Producto';

export default function App() {
  return (
    <div>
      <Header/>
      <LaVenta></LaVenta>
      <Producto></Producto>
    </div>
  );
}

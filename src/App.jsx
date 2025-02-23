import React from "react";
import ProductList from "./ProductList";

const products = [
  {
    name: "Cafe Latte",
    price: "5000",
    image: "/cafe.png",
  },
  {
    name: "Croissant",
    price: "6000",
    image: "/croassaint.png",
  },
  {
    name: "Bowl de Frutas",
    price: "24.10 / 250gr",
    image: "/bowl.png",
  },
];

const App = () => {
  return (
    <div style={{ width: '100vw', overflowX: 'hidden' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', backgroundColor: '#333333', width: '98%', color: 'white' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Moccafe</h1>
        <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ cursor: 'pointer' }}>Home</li>
          <li style={{ cursor: 'pointer' }}>About</li>
          <li style={{ cursor: 'pointer' }}>Service</li>
          <li style={{ cursor: 'pointer' }}>Portfolio</li>
          <li style={{ cursor: 'pointer' }}>Blog</li>
        </ul>
        <div style={{ cursor: 'pointer' }}>🛒</div>
      </nav>
      
      <div style={{ color: 'white', minHeight: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <header style={{ textAlign: 'center', padding: '50px 0', width: '100%', background: 'linear-gradient(to top, #47413c, #333333)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src="/FotoPrincipal.png" alt="Featured Coffee" style={{ width: '30%', height: 'auto', borderRadius: '15px', marginLeft: '50px' }} />
          
          <div style={{ flex: '1', textAlign: 'center' }}>
            <h2 style={{ fontSize: '34px', fontWeight: 'bold' }}>The best quality coffee beans<br /> for the best coffee brew</h2>
            <p style={{ color: '#E0C9A6', marginTop: '10px' }}>A cup is enough to give you energy all day long</p>
          </div>

          <img src="/taza.png" alt="Coffee Cup" style={{ width: '30%', height: 'auto', borderRadius: '15px', marginRight: '50px' }} />
        </header>

        <div style={{ backgroundColor: '#47413c', width: '100%', padding: '10px', flex: '1' }}>
          <ProductList products={products} />
        </div>
        
        <footer style={{ backgroundColor: '#333333', width: '100%', padding: '15px 0', textAlign: 'center' }}>  
          <p style={{ color: 'white' }}>© 2025 Moccafe. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
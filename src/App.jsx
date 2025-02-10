import React from "react";

const products = [
  {
    name: "Espresso Con Pana with Butterscotch",
    price: "$6.50",
  },
  {
    name: "Iced Mocha with Peppermint",
    price: "$5.20",
  },
  {
    name: "Sumatra Mandheling Coffee Blend",
    price: "$24.10 / 250gr",
  },
];

const App = () => {
  return (
    <div style={{ backgroundColor: '#4B2E2E', color: 'white', minHeight: '100vh', width: '100vw', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', backgroundColor: '#6F4E37', width: '100%' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Moccafe</h1>
        <ul style={{ display: 'flex', gap: '15px', listStyle: 'none', padding: 0 }}>
          <li style={{ cursor: 'pointer' }}>Home</li>
          <li style={{ cursor: 'pointer' }}>About</li>
          <li style={{ cursor: 'pointer' }}>Service</li>
          <li style={{ cursor: 'pointer' }}>Portfolio</li>
          <li style={{ cursor: 'pointer' }}>Blog</li>
        </ul>
        <div style={{ cursor: 'pointer' }}>🛒</div>
      </nav>
      
      <header style={{ textAlign: 'center', padding: '50px 0', width: '100%' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold' }}>The best quality coffee beans<br /> for the best coffee brew</h2>
        <p style={{ color: '#E0C9A6', marginTop: '10px' }}>A cup is enough to give you energy all day long</p>
        <button style={{ marginTop: '15px', backgroundColor: '#A67B5B', padding: '15px 25px', borderRadius: '25px', cursor: 'pointer', border: 'none', color: 'white', fontSize: '16px' }}>Order Now</button>
      </header>

      <section style={{ padding: '20px', width: '100%' }}>
        <h3 style={{ fontSize: '26px', fontWeight: 'bold', marginBottom: '15px' }}>Product</h3>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
          {products.map((product, index) => (
            <div key={index} style={{ backgroundColor: '#8B5E3B', padding: '25px', borderRadius: '15px', textAlign: 'center', flex: '1 1 30%', maxWidth: '300px' }}>
              <h4 style={{ fontWeight: 'bold', fontSize: '18px' }}>{product.price}</h4>
              <p style={{ color: '#E0C9A6', fontSize: '16px' }}>{product.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;

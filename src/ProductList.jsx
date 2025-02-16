import { useState } from 'react';

export default function ProductList({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div style={{ backgroundColor: '#403c39', width: '100%', padding: '10px', flex: '1' }}>
      <section style={{ width: '100%' }}>
        <h3 style={{ fontSize: '26px', fontWeight: 'bold', marginBottom: '15px', marginLeft: '55px' }}>Product</h3>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
          {products.map((product, index) => (
            <div key={index} style={{ position: 'relative', backgroundColor: '#765f4e', padding: '25px', borderRadius: '15px', display: 'flex', alignItems: 'center', textAlign: 'left', flex: '1 1 30%', maxWidth: '300px' }}>
              <img
                src={index === 0 ? '/cafe.png' : index === 1 ? '/croassaint.png' : '/bowl.png'}
                alt={product.name}
                style={{ width: '80px', height: '80px', borderRadius: '10px', marginRight: '15px' }}
              />
              <div>
                <h4 style={{ fontWeight: 'bold', fontSize: '18px' }}>{product.name}</h4>
                <p style={{ color: '#E0C9A6', fontSize: '16px', marginTop: '1px' }}>{product.price}</p>
              </div>
              <div 
                style={{ position: 'absolute', top: '8px', right: '10px', width: '25px', height: '25px', backgroundColor: '#b8a487', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
                onClick={() => setSelectedProduct(product)}
              >
                <span style={{ color: 'white', fontSize: '20px' }}>+</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedProduct && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <h4 style={{ fontSize: '22px', fontWeight: 'bold' }}>{selectedProduct.name}</h4>
            <p style={{ color: '#765f4e', fontSize: '18px' }}>{selectedProduct.price}</p>
            <button onClick={() => setSelectedProduct(null)} style={{ marginTop: '10px', padding: '10px 20px', backgroundColor: '#b8a487', border: 'none', borderRadius: '5px', cursor: 'pointer', color: 'white' }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

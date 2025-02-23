import { useState } from 'react';



export default function ProductList({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [step, setStep] = useState(1);
  const [customOrder, setCustomOrder] = useState({});
  const [orders, setOrders] = useState([]);
  const [showOrders, setShowOrders] = useState(false);
  const [quantities, setQuantities] = useState({});


  const handleSelectOption = (option, value) => {
    setCustomOrder(prev => ({ ...prev, [option]: value }));
  };
  const handleQuantityChange = (productName, change) => {
    setQuantities(prev => {
      const currentQuantity = prev[productName] || 1;
      const newQuantity = currentQuantity + change;
      if (newQuantity < 1) return prev; // No permitir menos de 1
      return { ...prev, [productName]: newQuantity };
    });
  };
  
  const handleSaveOrder = () => {
    // Verificar si selectedProduct es null antes de crear el pedido
    if (!selectedProduct || !selectedProduct.name) {
      console.error("No product selected");
      return;
    }

    const generateDescription = () => {
      // Verificar si selectedProduct es null antes de acceder a sus propiedades
      if (!selectedProduct || !selectedProduct.name) return '';
      let description = '';
      if (customOrder.leche) description += `${customOrder.leche.tipo}`;
      if (customOrder.tamano) {
        if (description) description += `, `;
        description += `${customOrder.tamano.tipo}`;
      }
      if (customOrder.extra) {
        if (description) description += `, `;
        description += `${customOrder.extra.tipo}`;
      }
      return description;
    };
  
  
  const calculateTotal = () => {
    // Verificar si selectedProduct es null antes de acceder a sus propiedades
    if (!selectedProduct || !selectedProduct.name) return 0;
    let total = 0;
    if (selectedProduct.price) total += parseFloat(selectedProduct.price);
    if (customOrder.leche) total += customOrder.leche.precio;
    if (customOrder.tamano) total += customOrder.tamano.precio;
    if (customOrder.extra) total += customOrder.extra.precio;
    const quantity = quantities[selectedProduct.name] || 1;
    return total * quantity;
  };
  
  
  const newOrder = {
    product: selectedProduct.name,
    image: selectedProduct.image,
    description: generateDescription(),
    total: calculateTotal(),
    quantity: quantities[selectedProduct.name] || 1
  };

  setOrders(prev => [...prev, newOrder]);
  setSelectedProduct(null);
  setStep(1);
  setCustomOrder({});
};
  
  

  const calculateGrandTotal = () => {
    return orders.reduce((sum, order) => sum + order.total, 0);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setStep(1);
    setCustomOrder({});
  };
  const getOrderCount = (productName) => {
    return orders.filter(order => order.product === productName).length;
  };

  return (
    <div style={{ backgroundColor: '#403c39', width: '100%', padding: '10px' }}>
      <section style={{ width: '100%' }}>
        <h3 style={{ fontSize: '26px', fontWeight: 'bold', marginBottom: '15px', color: '#E0C9A6', textAlign: 'center' }}>Available Products</h3>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
          {products.map((product, index) => (
            <div key={index} style={{ backgroundColor: '#765f4e', padding: '25px', borderRadius: '15px', maxWidth: '300px', textAlign: 'center' }}>
              <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px', borderRadius: '10px' }} />
              <h4 style={{ fontWeight: 'bold', fontSize: '18px', color: 'white' }}>{product.name}</h4>
              <p style={{ color: '#E0C9A6', fontSize: '16px' }}>${product.price}</p>
              <button onClick={() => setSelectedProduct(product)} style={{ backgroundColor: '#b8a487', border: 'none', borderRadius: '5px', cursor: 'pointer', color: 'white', padding: '10px 20px' }}>Customize Order</button>
              {/* Contador de cantidad */}
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
  <button 
    onClick={() => handleQuantityChange(product.name, -1)} 
    style={{ 
      backgroundColor: 'Transparent', 
      border: 'none', 
      borderRadius: '5px', 
      cursor: 'pointer', 
      padding: '5px 10px' 
    }}>-</button>
  <span style={{ color: 'white', fontSize: '18px' }}>{quantities[product.name] || 1}</span>
  <button 
    onClick={() => handleQuantityChange(product.name, 1)} 
    style={{ 
      backgroundColor: 'Transparent', 
      border: 'none', 
      borderRadius: '5px', 
      cursor: 'pointer', 
      padding: '5px 10px' 
    }}>+</button>
</div>

            </div>
          ))}
        </div>
      </section>

      {selectedProduct && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center', width: '90%', maxWidth: '400px', position: 'relative' }}>
            <button 
              onClick={closeModal} 
              style={{ 
                position: 'absolute', 
                top: '10px', 
                right: '10px', 
                backgroundColor: '#cccccc', 
                border: 'none', 
                borderRadius: '50%', 
                width: '30px', 
                height: '30px', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                cursor: 'pointer', 
                fontSize: '10px' 
              }}>
              ✖
            </button>
            <h4 style={{ fontSize: '24px', fontWeight: 'bold', color: '#3E2723' }}>Customize Order</h4>

            {/* PASOS PARA CAFE */}
            {selectedProduct.name === 'Cafe Latte' && step === 1 && (
              <>
                <p style={{ color: '#3E2723', fontWeight: 'bold' }}>Choose Milk Type:</p>
                <label style={{ color: '#3E2723' }}>
                  <input type="radio" name="leche" onChange={() => handleSelectOption('leche', { tipo: 'Lactose-free milk', precio: 1000 })} />
                  Lactose-free milk +$1000
                </label>
                <br />
                <label style={{ color: '#3E2723' }}>
                  <input type="radio" name="leche" onChange={() => handleSelectOption('leche', { tipo: 'Almond milk', precio: 1500 })} />
                  Almond Milk +$1500
                </label>
                <div style={{ marginTop: '20px' }}>
                  <button onClick={() => setStep(2)} style={{ backgroundColor: '#A67C52', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', padding: '10px 20px' }}>Continue</button>
                </div>
              </>
            )}
            {selectedProduct.name === 'Cafe Latte' && step === 2 && (
              <>
                <p style={{ color: '#3E2723', fontWeight: 'bold' }}>Choose Size:</p>
                <label style={{ color: '#3E2723' }}>
                  <input type="radio" name="tamano" onChange={() => handleSelectOption('tamano', { tipo: 'Grande', precio: 1000 })} />
                  Grande +$1000
                </label>
                <div style={{ marginTop: '20px' }}>
                  <button onClick={handleSaveOrder} style={{ backgroundColor: '#A67C52', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', padding: '10px 20px' }}>Finish Order</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <button onClick={() => setShowOrders(!showOrders)} style={{ margin: '20px auto', display: 'block', padding: '10px 20px', backgroundColor: '#b8a487', border: 'none', borderRadius: '5px', cursor: 'pointer', color: 'white' }}>View Order</button>

      
     
      {showOrders && (
        <div style={{ backgroundColor: '#765f4e', padding: '20px', borderRadius: '10px', color: 'white', textAlign: 'center' }}>
          <h4 style={{ fontSize: '22px', fontWeight: 'bold' }}>Custom Orders:</h4>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
            {orders.map((order, index) => (
              <div key={index} style={{ backgroundColor: '#b89972', padding: '15px', borderRadius: '15px', maxWidth: '300px', textAlign: 'center', position: 'relative' }}>
                <img src={order.image} alt={order.product} style={{ width: '120px', height: '120px', borderRadius: '10px' }} />
                <h4 style={{ fontWeight: 'bold', fontSize: '18px', color: '#3E2723' }}>{order.product}</h4>
                <p style={{ color: '#3E2723', fontSize: '16px' }}>Customize: {order.description}</p>
                <p style={{ color: '#3E2723', fontSize: '18px', fontWeight: 'bold' }}>Total: ${order.total}</p>
                <p style={{ color: '#3E2723', fontSize: '18px', fontWeight: 'bold' }}>Quantity: {order.quantity}</p>

                
              </div>
            ))}
          </div>
          <h4 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '15px' }}>Grand Total: ${calculateGrandTotal()}</h4>
        </div>
      )}
    </div>
  );
}

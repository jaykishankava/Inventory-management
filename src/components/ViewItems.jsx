
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';

function ViewItems({ items }) {
  const location = useLocation();
  const { state } = location;

  return (
    <div>
      
      
      <div className="row">
      <Header/>
      <h3 className='ms-3' >All Inventory Items</h3>
        {state?.items.map(item => (
          <div key={item.id} className="col-md-4 mb-3 ms-3" >
              <div className="card-body"  >
            <div className={`card ${item.quantity < 5 ? 'bg-secondary text-white' : 'bg-info text-white'}`} style={{borderRadius:"10px",padding:"10px   "}}>
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Quantity: {item.quantity}</p>
                <p className="card-text">Category: {item.category}</p>
                <p className="card-text">Supplier: {item.supplier}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewItems;

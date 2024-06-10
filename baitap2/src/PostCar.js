import React, { useState } from 'react';



const PostCar = ({onAddItem}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
 
  
 

 const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({
       Name: name, 
       Price: price, 
       Color: color, 
       Brand: brand, 
       Model: model
    });
    }


  return (
    <div>
      <h1> </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input 
              type="text" 
              value={price} 
              onChange={(e) => setPrice(e.target.value)} 
            />
          </label>
        </div>
        <div>
          <label>
            Color:
            <input 
              type="text" 
              value={color} 
              onChange={(e) => setColor(e.target.value)} 
            />
          </label>
        </div>
        <div>
          <label>
            Brand:
            <input 
              type="text" 
              value={brand} 
              onChange={(e) => setBrand(e.target.value)} 
            />
          </label>
        </div>
        <div>
          <label>
            Model:
            <input 
              type="text" 
              value={model} 
              onChange={(e) => setModel(e.target.value)} 
            />
          </label>
        </div>
        
        <button type="submit">Thêm</button>
      </form>

      
    </div>
  );
};


export default PostCar;
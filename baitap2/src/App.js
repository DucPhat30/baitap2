import React, { useState, useEffect } from 'react';
import { postCars, getCars, putCar, deleteCar } from './apiService';
import PostCar from './PostCar';

const CarComponent = () => {
  const [response, setResponse] = useState(null);
  const [a,seta] = useState('');
  const [apiData, setApiData] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const update = {
    Name: name, 
    Price: price, 
    Color: color, 
    Brand: brand, 
    Model: model
 }

  const handleSubmit = async (e) => {
    
    
      const result = await postCars(e);
      setResponse(result);
      const updatedData = await getCars();
      setApiData(updatedData);
      
    
  };

 
  useEffect(() => {
    fetchData();
    
  },[]);

  
    const fetchData = async () => {
      try {
        const data = await getCars();
        setApiData(data);
      } catch (err) {
      
       
        console.log(apiData);
      }
    };

   

 const Delete = async (id) =>{
    
 await deleteCar(id);
    
   
    fetchData();
  
 }

const Update = async(id,value) =>{
  
   
    await putCar(id,value);
    fetchData();
    setName('');
    setPrice('');
    setColor('');
    setBrand('');
    setModel('');
}

const Set = (e) =>{
  seta(e);
}
  return (
    <div>
      <h1> </h1>
      

    


      <h2> </h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Color</th>
            <th>Brand</th>
            <th>Model</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {apiData.map(car => (
            <tr key={car.id}>
              <td>{car.ID}</td>
              <td>{car.Name}</td>
              <td>{car.Price}</td>
              <td>{car.Color}</td>
              <td>{car.Brand}</td>
              <td>{car.Model}</td>
              <td><button onClick={() => Delete(car.ID)}>Xóa</button></td>
              <td> <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick={() =>Set(car.ID)}>Sửa</button></td>


              <div class="modal" id="myModal">
                <div class="modal-dialog">
                  <div class="modal-content">
                  
                   
                    <div class="modal-header">
                      <h4 class="modal-title">Update</h4>
                      <button type="button" class="close" data-dismiss="modal" >&times;</button>
                    </div>
                    
                   
                    <div class="modal-body">
                      <label>
                        Name:
                        <input 
                          type="text" 
                          value={name} 
                          onChange={(e) => setName(e.target.value)} 
                        />
                      </label>
                    </div>
                    <div class="modal-body">
                    <label>
                      Price:
                      <input 
                        type="text" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                      />
                    </label>
                    </div>
                    <div class="modal-body">
                    <label>
                      Color:
                      <input 
                        type="text" 
                        value={color} 
                        onChange={(e) => setColor(e.target.value)} 
                      />
                    </label>
                    </div>
                    <div class="modal-body">
                    <label>
                      Brand:
                      <input 
                        type="text" 
                        value={brand} 
                        onChange={(e) => setBrand(e.target.value)} 
                      />
                    </label>
                    </div>
                    <div class="modal-body">
                    <label>
                      Model:
                      <input 
                        type="text" 
                        value={model} 
                        onChange={(e) => setModel(e.target.value)} 
                      />
                    </label>
                    </div>
                    
                   
                    <div class="modal-footer">
                      <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() =>Update(a,update)}>Update</button>
                    </div>
                    
                  </div>
                </div>
              </div>

            </tr>
           
          ))}
        </tbody>
      </table>
     <PostCar onAddItem={handleSubmit} />
    </div>
    
  );
};

export default CarComponent;
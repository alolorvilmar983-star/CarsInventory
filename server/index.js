const express = require('express');
const app = express();
const port = 3000;

const data ={
    cars : [
    {id: 1, make: 'Toyota',model:'Camry', year:'2023', color: 'Silver', quantity:'15', dealer:'Toyota of Glendale'},
    {id: 2, make: 'Honda',model:'CiF-150', year:'2024', color: 'Black', quantity:'20', dealer:'Honda Downtown'},
    {id: 3, make: 'Ford',model:'Camry', year:'2023', color: 'White', quantity:'10', dealer:'Ford of North Hollywood'},
    {id: 4, make: 'Chevrolet',model:'Tahoe', year:'2024', color: 'Red', quantity:'8', dealer:'hevy Malibu'},
    {id: 5, make: 'Nissan',model:'Rogue', year:'2023', color: 'Blue', quantity:'12', dealer:'Nissan of Burbank'},
    {id: 6, make: 'BMW',model:'X5', year:'2024', color: 'Gray', quantity:'5', dealer:'BMW of Encino'},   
    {id: 7, make: 'Mercedes-Benz',model:'C-Class', year:'2023', color: 'Black', quantity:'7', dealer:'MB of Bev Hills'}, 
    {id: 8, make: 'Hyundai',model:'Elantra', year:'2024', color: 'White', quantity:'18', dealer:'Hyundai of A'},   
    {id: 9, make: 'Toyota',model:'RAV4', year:'2024', color: 'Blue', quantity:'14', dealer:'Toyota of Pasadena'},
    {id: 10, make: 'Toyota',model:'Corolla', year:'2024', color: 'White', quantity:'22', dealer:'Toyota of Glendale'},                 
    {id: 11, make: 'BMW',model:'3 Series', year:'2023', color: 'Black', quantity:'9', dealer: 'BMW of Beverly Hills'},  
]

}
app.get('/api/developer', (req, res) => {
  res.send('Vilmar T. Alolor');
});

app.get('/api/cars', (req, res) => {
  res.json(data.cars)
}); 
app.get('/api/cars/maker/:id',(req,res) => {
    const id = Number (req.params.id);
    const car = data.cars.find(c => c.id === carId);

    if (!car) {
        return res.status(404).json({ error: 'Car not found' });
    }

    res.json(car);
});

app.post('/api/cars/:id', (req,res)=>{
    const id = Number (req,params.id);
    const cars = data.cars.findIndex(c => c.id === id);


    data.cars.push(newCar);

    res.status(201).json({message:'student sadded'});

});

app.put('/cars/:id', (req,res)=>{
    const id = Number(req.params.id);
    const index = data.csars.findIndex(c =>c.id === id)

    if(index === -1){
        return res.status(404).json ({message:'car not found'});
    }
    res.json(car);

    });

app.delete('/cars/:id', (req,res)=>{
    const id = Number (req.params.id);
    const index = data.cars.findIndex(c => c.id === id)

    if(index === -1){
        return res.status(404).json ({message:'car not found'});
    }
    const deleted = data.cars.splice(index,1);
    res.json(car);
});

app.get('/',(req,res) => {
    res.send('Hello World!');

});
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});


// Task: 

// Your task is to create your own server using Node.js and develop the required REST API endpoints for managing cars. 

// Identify the developer of the API 

// Retrieve all available cars 

// Retrieve cars based on their make 

// Retrieve a specific car using its ID 

// Add a new car 

// Update an existing car 

// Delete an existing car 

// You are required to follow the exact HTTP method and URI specified for each operation. 

 
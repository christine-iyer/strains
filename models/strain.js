const mongoose = require('mongoose');

//Make a Schema
const strainSchema = new mongoose.Schema({
     Strain: { type: String, required: true }, 
     Type: { type: String, required: true }, 
     Rating: { type: Number, required: true }, 
     Effects: { type: String, required: true },      
     Flavor: { type: String, required: true }, 
     Description: { type: String, required: true }, 
     Comments: { type: String, required: true }, 
     Date: { type: Date, required: true },
});

//Make a Model from the Schema
//the Frut model allows us to use the CRUD Create Read Update Destroy in the app

const Strain = mongoose.model('Strain', strainSchema);
//making a fruits collection

//Export the Model for Use in the App
module.exports=Strain;
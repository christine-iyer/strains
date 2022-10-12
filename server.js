require('dotenv').config()
// Require modules
const fs = require('fs') // this engine requires the fs module like we did Saturday
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Strain = require('./models/strain')
// this makes 2 const fruits & veggies 

// Create our express app
const app = express()

// Configure the app (app.set)
/*Start Config */
app.use(express.urlencoded({ extended: true })) // This code makes us have req.body
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
  console.log('connected to MongoDB Atlas')
})


/* END CONFIG */

// Mount our middleware (app.use)

/*Start Middleware */

app.use(methodOverride('_method'))
app.use(express.static('public'))
/* END Middleware */

// Mount Routes
/*Start Routes */

app.get('/strains', (req, res) => {
  Strain.find({}, (err, foundStrains) => {
    if(err) {
      console.log(err)
      res.status(400).send(err)
    } else {
      res.render('strains/Index', {
        strains: foundStrains
      })
    }
  })
})

// NEW (Not applicable in an api)

app.get('/strains/new', (req, res) => {
  res.render('strains/New')
})
// DELETE
app.delete('/strains/:id', (req, res) => {
  Strain.findByIdAndDelete(req.params.id, (err, deletedStrain) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.redirect('/strains')
    }
  })
})
//UPDATE
app.put('/strains/:id', (req, res) => {
  Strain.findByIdAndUpdate(req.params.id, req.body, {new: true},(err, updatedStrain) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.redirect(`/strains/${updatedStrain._id}`)
    }
  })
})

// CREATE
app.post('/strains', (req, res) =>{
  // req.body which contains all of our form Data we will get from the user
  //req.body.readyToEat === 'on' ? req.body.readyToEat = true : req.body.readyToEat = false
  Strain.create(req.body, (err, createdStrain) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.redirect(`/strains/${createdStrain._id}`)
      //res.send(createdFruit)
    }
  })
})

// EDIT (not applicable in an api)

app.get('/strains/:id/edit', (req, res) => {
  Strain.findById(req.params.id, (err, foundStrain) => {
    if(err){
     console.error(err)
     res.status(400).send(err)
    } else {
     res.render('strains/Edit', {
       strain: foundStrain
     })
    }
  })
 })

 // SHOW ---- READ ---- GET
app.get('/strains/:id', (req, res) => {
  Strain.findById(req.params.id, (err, foundStrain) => {
    if(err){
     console.error(err)
     res.status(400).send(err)
    } else {
     res.render('strains/Show', {
       strain: foundStrain
     })
    }
  })
 })


app.listen(3000, () => {
     console.log('Listening on Port 3000')
 })
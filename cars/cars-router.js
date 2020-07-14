const router = require('express').Router()

const db = require('../data/knexConfig.js')

// `````````GET`````````
//get cars
router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            console.log(cars)
            res.json(cars)
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
})

//get car by id
router.get('/:id', (req, res) => {
    db('cars').where({ id: req.params.id }).first()
        .then(car => {
            if(car){
                console.log(car)
                res.json(car)
            } else {
                res.status(404).json({message: 'car with that id doesnt exist'})
            }
            
        })
        .catch(err => {
            res.status(500).json({error: err.message})
        })

})

//`````````POST`````````
router.post('/', (req, res) => {
    db('cars').insert(req.body)
        .then(ids => {
            console.log(ids)
            db('cars').where({ id: ids[0] })
                .then(newCar => {
                    res.status(201).json(newCar)
                })
        })
        .catch(err => {
            console.log('POST error', err)
            res.status(500).json({ error: err.message })
        })
})


//~~~~~~STRETCH~~~~~
//``````````PUT```````````
router.put('/:id', (req, res) => {

    if (!Object.keys(req.body).length) {
        res.status(400).json({ message: 'nothing to update was given' })
    }

    db('cars').where({id: req.params.id})
    .update(req.body)
    .then(totalUpdated => {
        db('cars').where({id: req.params.id})
        .then( carUpdated => {
            if(totalUpdated > 0){
                res.json(carUpdated)
            } else {
                res.status(404).json({message: 'cant find car with that id'})
            }
        })
    })
    .catch(err=> {
        console.log(err)
        db('cars')
        .then(cars => {
            if(cars.filter(car => car['vin'] === req.body['vin'] )){
                res.status(400).json({message: 'vin must be unique'})
            } else {
                res.status(500).json({error: err.message})
            }
        })
        
    })
})

//```````DELETE````````
router.delete('/:id', (req, res) => {
    db('cars').where({id: req.params.id}).first()
    .then( carDeleted => {
        db('cars').where({id:req.params.id}).del()
        .then( numberDeleted => {
            if(numberDeleted > 0){
                res.json({carDeleted})
            } else{
                res.status(404).json({message: 'car with that id not found'})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: err.message})
        })
    })
})


module.exports = router
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the db schema
let favThings = require('../models/favThings');

/* GET FavThings list page to the db schema*/
router.get('/', (req, res, next) => {
    favThings.find((err, thingsList) => {
        if(err){
            return console.error(err);
        }
        else{
            //console.log(thingsList);

            
            res.render('things/index', {
                title: 'Favourite thing list',
                thingsList: thingsList

            });
             
        }
    });
});


module.exports = router;

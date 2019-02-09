let express = require('express');
let router = express.Router();
let mongoose = require('mongoode');

// create a reference to the db schema
let favThings = require('../models/favThings');

/* GET FavThings list page to the db schema*/
router.get('/', (req, res, next) => {
    favThings.find((err, favThingsList) => {
        if(err){
            return console.error(err);
        }
        else{
            console.log(favThingsList);

            /*
            res.render('things/index', {
                title: 'Favourite thing list',
                favThingsList: favThingsList

            });
             */
        }
    });
});


module.exports = router;

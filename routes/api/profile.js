const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


const User = require('../../models/User');
const Profile = require('../../models/Profile');

router.get('/',passport.authenticate('jwt',{session :false}),(req,res) =>{
    const errors = {};

    Profile.findOne({user : req.user.id})
    .then(profile => {
        if(!profile){
            errors.noprofile = 'This is no profile for this user';
            return res.status(404).json(errors)
        }

        res.json(profile);
    }).catch(err => res.status(404).json(err));
});

module.exports = router;
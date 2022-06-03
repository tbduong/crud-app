const express = require('express');
var router = express.Router(); //defintes the different http methods
var Show = require('../models/Schema');

//e.g When a client send a post request with URI create, execute this method 
router.post('/create', (req, res, next)=>{ 
    var newShow = new Show({
        title: req.body.title,
        platform: req.body.platform
    });

    newShow.save((err, show) => {
        if (err) {
            res.status(500).jsom({ errmsg:err });
        res.status(200).json({ msg: show });
        }
    });
    // res.status(200).json({msg: 'POST request is working'});
});

router.get('/read', (req, res, next)=>{ 
    Show.find({ }, (err, shows) => {
        res.status(500).jsom({ errmsg:err });
        res.status(200).json({ msg: shows });
    });
    // res.status(200).json({msg: 'GET request is working'});
});

router.put('/update', (req, res, next)=>{ 

    Shows.findById(req.body._id, (err, show)=>{
        if (err) {
            res.status(500).jsom({ errmsg:err });
        show.title = req.body.title;
        show.platform = req.body.platform;
        show.save((err, show)=> {
            res.status(500).jsom({ errmsg:err });
        res.status(200).json({ msg: shows });
        })
        }
    });
    // res.status(200).json({msg: 'PUT/UPDATE request is working'});
});

router.delete('/delete/:id', (req, res, next)=>{ 
    Show.findOneAndRemove({ _id:req.params._id}, (err, show) =>{
        if (err) {
            res.status(500).jsom({ errmsg:err });
        res.status(200).json({ msg: show });
        }
    });
    // res.status(200).json({msg: 'DELETE request is working'});
});

module.exports = router;
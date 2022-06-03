const express = require('express');
var router = express.Router(); //defintes the different http methods

//e.g When a client send a post request with URI create, execute this method 
router.post('/create', (req, res, next)=>{ 
    res.status(200).json({msg: 'POST request is working'});
});

router.get('/read', (req, res, next)=>{ 
    res.status(200).json({msg: 'GET request is working'});
});

router.put('/update', (req, res, next)=>{ 
    res.status(200).json({msg: 'PUT/UPDATE request is working'});
});

router.delete('/delete/:id', (req, res, next)=>{ 
    res.status(200).json({msg: 'DELETE request is working'});
});

module.exports = router;
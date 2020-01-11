const express = require('express');
const router = express.Router();

//@route GET api/auth
//@desc Register A User
//@access Public

router.post('/', (req, res)=>{
    res.send("Register A User");
});


module.exports = router;
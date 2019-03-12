let router = require('express').Router();

router.get('/',(req,res)=>{
    res.json({
        status:'API its work',
        message:'Welcome',
    });
});

let userController = require('./userController');

router.route('/users')
.get(userController.index)
.post(userController.new);


router.route('/users/:_id')
.get(userController.view)
.patch(userController.update)
.put(userController.update)
.delete(userController.delete);

module.exports = router;
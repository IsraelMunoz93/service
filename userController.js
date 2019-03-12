User = require('./userModel.js');

exports.index = (req,res)=>{
    User.get((err,usuario)=>{
        if(err){
            res.json({
                status: 'error',
                message:err,
            });
        }
        res.json({
            status:'succes',
            message:'User retrieved successfully',
            data:usuario
        });
    });
}

exports.new = (req,res)=>{
    let user = new User();
    user.name = req.body.name ? req.body.name : user.name;
    user.gender = req.body.gender;
    user.email = req.body.email;
    user.phone = req.body.phone;

    user.save((err)=>{
        if(err) res.json(err);

        res.json({
            message:'New contact created!',
            data:user
        });

    });
}

exports.view = (req,res)=>{
    User.findById(req.params.user_id,(err,user)=>{
        if(err) res.send(err);

        res.json({
            message:'User details loading',
            data:user
        });

    });
}

exports.update = (req,res)=>{
    User.findById(req.params.user_id,(err,user)=>{
        if(err) res.send(err);

        user.name = req.body.name ? req.body.name : user.name;
        user.gender = req.body.gender;
        user.email = req.body.email;
        user.phone = req.body.phone;

        user.save((err)=>{
            if(err) res.json(err);

            res.json({
                message : 'user update',
                data: user
            });
        });
    });    
}

exports.delete = (req,res)=>{
    User.remove({
        _id: req.params.user_id},(err,user)=>{
            if(err) res.send(err);

            res.json({
                status: 'succes',
                message:'User deleted'
            });
        });
}
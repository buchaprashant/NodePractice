const express = require('express');
const bodyParser = require('body-parser');
const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('All the leaders!');
})
.post((req,res,next)=>{
    res.end('Will add the leader: '+req.body.name+' with details: ' + req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('PUT method not supported on /leaders!');
})
.delete((req,res,next)=>{
    res.end('Deleting all the leaders!');
});


leaderRouter.route('/:leaderId')
.get((req,res,next)=>{
    res.end('Sending the leader with id: '+req.params.leaderId+'.');
})
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end('POST operation not supported on /leaders/' + req.params.leaderId);
})
.put((req,res,next)=>{
    res.write('Updating the leader with leaderId: '+req.params.leaderId+'\n');
    res.end('Will update the leader: '+req.body.name+' with details '+ req.body.description);
})
.delete((req,res,next)=>{
    res.end('Deleting the leader with id: '+req.params.leaderId);
});


module.exports = leaderRouter;
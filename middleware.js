
module.exports =  reqFilter = (req,resp,next)=>{
    if(!req.query.age){
        resp.send('enter age');
    }
    else if(req.query.age < 18){
        resp.send('you cannot access');
    }
    else{
        next();
    }
}
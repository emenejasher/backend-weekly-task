const express = require('express');
let packages = require('./package/package.js');
const app = express();

const packagelist = require('./package/package.js');

app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Successful response.');
});

app.get('/packagelist',(req, res)=>{
    res.json(packagelist).status(201);
   
});

app.post('/packagelist/add',(req, res) =>{
    if(!req.body.name || !req.body.description || !req.body.image || !req.body.price){
        res.status(400).send('u try')
    }else{
        let newpackagelist ={
            id: packagelist.length + 1,
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            price: req.body.price,
        }
        packagelist.push(newpackagelist);
        res.json(packagelist);
    }

});

app.put('/packagelist/:id', (req, res) =>{
    let packagelistId = Number(req.params.id);
    let body = req.body;
    let packagelist = packagelist.find((packagelist) => packagelist.id === packagelistId);
    let indexOfPackagelist = packagelist.indexOf(packagelist);
    if(!packagelist){
        res.status(404).send(`Packagelist with id of ${packagelistId} not found`)
    }else{
        let updatePackagelist = {...packagelist, ...body};
        packagelist[indexOfPackagelist] = updatePackagelist;
        res.json(updatePackagelist)
    }
})

app.delete('/packagelist/:id',(req,res) =>{
    let packagelistId = Number(req.params.id);
    let deletePackagelist = packagelist.filter((packagelist) => packagelist.id !== packagelistId);
    if(!deletePackagelist){
        res.status(404).send(`Packagelist with id of ${packagelistId} not found`);
    }else{
        packagelist = deletePackagelist;
        res.json(packagelist);
    }
})


app.listen(3000, () => console.log('Example app is listening on port 3000.'));

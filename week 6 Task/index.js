const express = require('express');
let packageList = require('./package/package.js');
const app = express();
const Port = 3000;


app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.get('/', (req, res) =>{
    res.send('Successful response.');
});

app.get('/packageList',(req, res)=>{
    res.json(packageList).status(201);
   
});

app.get('/packageList/:id', (req, res) =>{

    let packageListId = Number(req.params.id);

    let getPackageList = packageList.find((packageList) => packageList.id === packageListId);

    if(!getPackageList){

        res.status(404).send(`Cannot find packageList with id of ${packageListId}`);

    }else {

        res.json(getPackageList);

    }

});

app.post('/packageList/add',(req, res) =>{
    if(!req.body.name || !req.body.description || !req.body.image || !req.body.price){
        res.status(400).send('u try')
    }else{
        let newpackageList ={
            id: packageList.length + 1,
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            price: req.body.price,
        }
        packageList.push(newpackageList);
        res.json(packageList);
    }

});

app.put('/packagelist/:id', (req, res) =>{
    let packageListId = Number(req.params.id);
    let body = req.body;
    let packageList = packageList.find((packageList) => packageList.id === packageListId);
    let indexOfPackageList = packageList.indexOf(packageList);
    if(!packageList){
        res.status(404).send(`PackageList with id of ${packageListId} not found`)
    }else{
        let updatePackageList = {...packageList, ...body};
        packageList[indexOfPackageList] = updatePackageList;
        res.json(updatePackageList)
    }
})

app.delete('/packageList/:id',(req,res) =>{
    let packageListId = Number(req.params.id);
    let deletePackageList = packageList.filter((packageList) => packageList.id !== packageListId);
    if(!deletePackageList){
        res.status(404).send(`PackageList with id of ${packageListId} not found`);
    }else{
        packageList = deletePackageList;
        res.json(packageList);
    }
})

app.listen(3000, () => console.log('Example app is listening on port 3000.'));
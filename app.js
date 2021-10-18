const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// for serving static files
app.use('/static', express.static('static'))
app.use(express.urlencoded())

//Set the template engine as pug
app.set('view engine', 'pug')

//Set view directory
app.set('views', path.join(__dirname, 'views'))

// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('index.pug', params);
});

app.post('/', (req, res)=>{
    // console.log(req.body);
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let outputTowrite =`The name of the client is: ${name}, ${age} year old ${gender}, residing at ${address}, more about him ${more}`
    fs.writeFileSync('output.txt', outputTowrite)
    const params = { 'message': 'Your form has been submitted successfuly'}
    res.status(200).render('index.pug', params);
})

// app.get("/demo", (req, res)=>{ 
//     res.status(200).render('demo', { title: 'Hey Harry', message: 'Hello there and thanks for telling me how to use pubG!' })
// });

// app.get("/", (req, res)=>{ 
//     res.send("This is homepage of my first express app with Harry");
// });
// app.get("/about", (req, res)=>{ 
//     res.send("This is about page");
// });
// app.get("/contact", (req, res)=>{ 
//     res.status(404).send("This is not found");
// });
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
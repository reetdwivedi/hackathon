// var express = require("express")
// var app = express();
// var ejs = require("ejs");
// var mongoose = require("mongoose");
// // const { connect } = require("http2");
// // const { stringify } = require("querystring");
// app.set("view engine", "ejs")
// var bodyparser = require("body-parser");
// const { info } = require("console");

// app.use(bodyparser.urlencoded({ extended: true }))


// mongoose.connect('mongodb://localhost:27017/bhencho',
//     {

//         poolSize: 50,
//         wtimeout: 2500,
//         useNewUrlParse: true

//     }
// ).then(function () {
//     console.log("connection successful")
// }).catch(function (err) {
//     console.log(err)
// })

// var userschema = mongoose.Schema({

//     name: String,
//     email: String,
//     phno: Number,
//     password: String
// })

// var Chup = mongoose.model("Chup", userschema)


// app.get("/", function (req, res) {
//     res.render("home")
// })


// app.get("/sign_up", function (req, res) {
//     res.render("signup")
// })

// app.post("/sign_up", (req, res) => {

//     var info = new Chup({
//         name: req.body.user,
//         email: req.body.email,
//         phno: req.body.mobile,
//         password: req.body.pass
//     })

// //     Detail.insertMany(info,function(err){
// //         if(err){
// //             console.log(err)
// //         }
// //         else{
// //             console.log("succseefully added");
// //         }
// //     })
// //    info.save(function(err){
// //        if(err){
// //            console.log(err)
// //        }
// //        else{
// //            console.log("successfully saved")
// //        }
       
// //    })
//     info.save()
//     res.redirect("/")
// })


// app.listen(3000, function () {
//     console.log("server is running")
// })



var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var ejs = require("ejs")
// var cors = require("cors");

const app = express()
app.set("view engine" , "ejs")

app.use(bodyParser.json())
// app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/mydb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))


app.get("/sign_up",function(req,res){
    res.sendFile(__dirname + "/signup.html")
    
})

app.post("/sign_up",(req,res)=>{
    var username = req.body.user;
    var email = req.body.email;
    var phno = req.body.mobile;
    var password = req.body.pass;
    var conpass = req.body.conpass;

    var data = {
        "name": username,
        "email" : email,
        "phno": phno,
        "password" : password,
        "conpass" :conpass
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

     res.redirect('/')

})


app.get("/ds",function(req,res){
    res.sendFile(__dirname + "/datastructure.html")
})

app.get("/js" , function(req,res){
    res.sendFile(__dirname + "/javascript.html")
})

app.get("/python",function(req,res){
    res.sendFile(__dirname + "/python.html")
})

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.sendFile(__dirname + "/hackathon.html")
})

app.get("/WIT",function(req,res){
    res.sendFile(__dirname + "/whatisthis.html")
})

app.get("/monitors",function(req,res){

        res.sendFile(__dirname + "/monitors.html")
    
})

app.listen(3000,function(req,res){
    console.log("server is listening at port 3000")


})





































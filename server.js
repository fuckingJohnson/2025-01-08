//install: node js
//install web server package: express >npm install express

var express = require("express");
var bodyParser = require("body-parser");

server = express();
var fs = require("fs");
// const path = require("path"); //路徑處理

//web root
server.use(express.static(__dirname+"/AgencyProject"));//web root
//server.use(express.static("md110"));//web root
server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());


// var fileUpload = require("express-fileupload");
// server.use(fileUpload({defCharset:'utf8', defParamCharset:'utf8'}));
const formidable  = require('formidable');

var DB = require("nedb-promises"); //建立nedb資料庫
// var ProfolioDB = DB.create(__dirname+"/profolio.db");
// var ContactDB = DB.create(__dirname+"/contact.db");
var informationDB = DB.create("information.db");


//var sharp=
server.set("view engine", "ejs");
server.set("views", __dirname+"/views");

// ProfolioDB.insert([
//     { modal: "#portfolioModal1", imgSrc: "modalroundicons.png", heading: "Round Icons", text: "Graphic Design" },
//     { modal: "#portfolioModal2", imgSrc: "startup-framework.png", heading: "Startup Framework", text: "Website Design" },
//     { modal: "#portfolioModal3", imgSrc: "treehouse.png", heading: "Treehouse", text: "Website Design" },
//     { modal: "#portfolioModal1", imgSrc: "roundicons.png", heading: "Round Icons", text: "Graphic Design" },
//     { modal: "#portfolioModal2", imgSrc: "startup-framework.png", heading: "Startup Framework", text: "Website Design" },
//     { modal: "#portfolioModal3", imgSrc: "treehouse.png", heading: "Treehouse", text: "Website Design" }
// ])

informationDB.insert([
    {imgSrc: "7-07.png"},
    {imgSrc: "7-07-2.png"},
    {imgSrc: "7-07-3.png"}
])


// server.get("/services", (req, res) => {
//     //DB find
//     var Services = [
//         { icon: "fa-shopping-cart", heading: "E-Commerce", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit." },
//         { icon: "fa-laptop", heading: "Responsive Design", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit." }
//     ];
//     res.send(Services);
// });

// server.get("/profolio", (req, res) => {
//     //DB
//     ProfolioDB.find({}).then(results => {
//         if (results != null) {
//             res.send(results);
//         } else {
//             res.send("Error!");
//         }
//     })
// })

// server.post("/contact_me", (req, res) => {
//     ContactDB.insert(req.body);
//     res.redirect("/#contact");
// })

// upload component [gallery image]
server.post("/glry", function(req, res){ 
    const form = new formidable.IncomingForm();

    // 解析表單請求
    form.parse(req, function (err,fields,files){


       console.log(fields);
       console.log(files);

       fs.renameSync(files.imgSrc.filepath,"AgencyProject/pictures/"+files.imgSrc.originalFilename);       
       var newData1 = fields;
       newData1.imgSrc ="pictures/"+files.imgSrc.originalFilename;
       informationDB.insert(newData1);
       res.send("上傳成功");
    //    res.redirect("/data.html");
    });  
});

// get component [gallery image] 

server.get("/glry", function(req, res) {
    informationDB.find({}).then(results => {
        if (results != null) {
            res.send(results);
        } else {
            res.send("Error!");
        }
    })
});




server.listen(8500, function () {
    console.log("Server is running at port 8500.");
})
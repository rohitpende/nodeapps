//Get all the required express modules
express=require("express")
bodyParser=require("body-parser")
fs=require("fs")

//generate new app using Express
app = express();
app.use(bodyParser.urlencoded({extended:false}));

//GET Method for default page request
app.get("/",function(req,resp){
    resp.sendFile("form1.html",{root:__dirname});
    console.log("Form Sent");
});

//POST method to calculate Simple Interest
app.post("/calculate", function(req,resp){
    si = (parseInt(req.body.pr)*parseInt(req.body.int)*parseInt(req.body.yrs))/100;
    resp.send("Simple Interest is "+parseInt(si));
    console.log("SI Sent is "+si);
});

//Start the server on port no and display messafe on console
app.listen(3300,function(){
    console.log("Server Started on 3300");
});
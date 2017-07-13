var bodyParser   = require("body-parser"),
    mongoose    = require("mongoose"),
    express     = require("express"),
    app         = express();

//  APP CONFIG
mongoose.connect("mongodb://localhost/blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


//  MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);



//  ROUTES



app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Serving blog_app...")
});
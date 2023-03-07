const express = require("express");
const app = express();
const session = require("express-session");
const configRoutes = require("./routes");
const exphbs = require("express-handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(
  session({
    name: "AuthCookie",
    secret: "This is a secret.. shhh don't tell anyone",
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: 60000 },
  })
);

app.use("/protected", (req, res, next) => {
  if (!req.session.user) {
    
    return res.status(403).render("forbiddenAccess")
  } else {  next();
  }

});

app.use("/login", (req, res, next) => {
  if (req.session.user) {
   
    return res.redirect("/protected");
  } 
  next();
});

app.use((req, res, next)=>{
  console.log('[' + new Date().toUTCString() + ']: ' + req.method + ' ' + req.originalUrl + ' (Authenticated User)')
  next();
})

// app.use("/protected", (req, res, next) => {
//   console.log(">>>> my methods is", req.method);

//   if (req.method == "POST" && req.session.user) {
//     console.log(">>> I am in middleware<<<<");
//     return;
//   } else {
//     console.log("<<< forwarded >>>>");
//     next();
//   }
// });

configRoutes(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3000");
});

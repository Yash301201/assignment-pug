const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;


app.set("view engine", "pug");


app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));


const formRoutes = require("./routes/forms");


app.use("/", formRoutes);


app.listen(PORT, () => {
    console.log(`====================================`);
    console.log(`Server is running successfully!`);
    console.log(`Open: http://localhost:${PORT}`);
    console.log(`====================================`);
});
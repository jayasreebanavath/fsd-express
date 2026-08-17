const express = require("express");
const app = express();
const PORT = 3000;
// JSON data receive cheyadaniki
app.use(express.json());
// GET - Read data
app.get("/user/:id", (req, res) => {
    const id = req.params.id;
    res.json({
        message: "User details",
        userId: id,
        name: "Jayasri",
        course: "AIML"
    });
});
// POST - Create data
app.post("/user", (req, res) => {
    const data = req.body;
    res.json({
        message: "User created",
        user: data
    });
});


// PUT - Update data
app.put("/user/:id", (req, res) => {
    const id = req.params.id;
    const data = req.body;

    res.json({
        message: "User updated",
        userId: id,
        user: data
    });
});


// DELETE - Delete data
app.delete("/user/:id", (req, res) => {
    const id = req.params.id;

    res.json({
        message: "User deleted",
        userId: id
    });
});


// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const express = require("express");

const app = express();
const PORT = 5000;

// Logging Middleware
const loggingMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

// Custom Middleware
const customMiddleware = (req, res, next) => {
    console.log("Custom Middleware Executed");
    next();
};



// Use Middlewares
app.use(customMiddleware);
app.use(loggingMiddleware);
app.use(express.json());
// Routes
app.get("/user", (req, res) => {
    res.json({
        name: "Jayasri",
        course: "AIML"
    });
});

app.post("/user", (req, res) => {
    res.json({
        message: "User created"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
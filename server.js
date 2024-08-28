const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Temporary data storage (replace with a database in a real application)
let timesheets = [];

// Routes
app.post('/login', (req, res) => {
    const { userId } = req.body;
    if (userId === '1') {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid ID' });
    }
});

app.post('/timesheet', (req, res) => {
    const { week } = req.body;
    const newTimesheet = { id: timesheets.length + 1, week };
    timesheets.push(newTimesheet);
    res.json({ success: true, timesheet: newTimesheet });
});

app.get('/timesheets', (req, res) => {
    res.json(timesheets);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

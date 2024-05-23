const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path');
const app = express();
const port = 3000;


// Middleware
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

// app.use(express.json()); // Used to parse JSON bodies
// app.use(express.urlencoded()); // Parse URL-encoded bodies using query-string library
// // or
// app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// app.use(formidable());

const testRoutes = require('./routes/test');
app.use('/api/test', testRoutes);

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);
const userRoutes = require('./routes/user');
app.use('/api/user', userRoutes);
const toolRoutes = require('./routes/tool')
app.use('/api/tool', toolRoutes);
const symptomRoutes = require('./routes/symptom');
app.use('/api/symptom', symptomRoutes);
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
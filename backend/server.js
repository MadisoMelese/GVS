const express = require('express');
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db');
const app = express();

app.use(cookieParser())
app.get('/', (req, res) => {
    res.send('Backend is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`)
}
);
const bcrypt = require('bcrypt');
const Admin = require('./models/Admin');

const createAdmin = async () => {
    const existingAdmin = await Admin.findOne({ email: 'admin@example.com' });
    if (!existingAdmin) {
        const hashedPassword = await bcrypt.hash('admin123', 10);
        const newAdmin = new Admin({ email: 'admin@example.com', password: hashedPassword });
        await newAdmin.save();
        console.log('Admin account created.');
    } else {
        console.log('Admin already exists.');
    }
};

// Call function at startup
createAdmin();


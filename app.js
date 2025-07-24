const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/RajyogDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

// Schema
const formSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  options: String,
  message: String,
  submittedAt: { type: Date, default: Date.now }
});

// Model
const customers = mongoose.model('customers', formSchema);

// Routes
app.post('/submit', async (req, res) => {
  try {
    const newEntry = new customers(req.body);
    await newEntry.save();
    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit form.' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

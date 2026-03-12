const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Frontend files ko serve karne ke liye
app.use(express.static(path.join(__dirname, 'public')));

// Ek chhota sa Backend API endpoint
app.get('/api/greet', (req, res) => {
    res.json({ message: "Hello! Yeh data Backend API se aa raha hai. Aapka Render deployment successful raha! 🎉" });
});

// Server start karna
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
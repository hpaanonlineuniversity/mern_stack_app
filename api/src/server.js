import express from 'express'
import connectDB from './config/db.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

connectDB().then(() => {
    app.listen(PORT, () => {
      
        // '0.0.0.0' ကို explicitly bind လုပ်ပါ
      app.listen(PORT, '0.0.0.0', () => {
          console.log(`✅ Server is running on http://0.0.0.0:${PORT}`);
          console.log(`✅ Accessible via http://localhost:${PORT}`);
      }); 

  });
}).catch((err) => {
  console.error('Database connection failed:', err);
  process.exit(1); // Exit process with failure
});
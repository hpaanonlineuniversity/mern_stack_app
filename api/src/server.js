import express from 'express'
import connectDB from './configs/db.js';
import userRoutes from './routes/user_route.js'

const app = express();
const PORT = process.env.PORT || 3000;




// Body parser middleware ထည့်ပါ
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/auth', userRoutes);

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


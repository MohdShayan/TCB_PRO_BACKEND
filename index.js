import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import checkForAuthentication from './middleware/auth.js';
import { ConnectDB } from './ConnectDB.js';
import allRoutes from './routes/routes.js';
import userRoutes from './routes/userRoutes.js';
import { getAuthUserId } from './controllers/userController.js';

dotenv.config();
const app = express();


app.use(
  cors({
    origin: 'http://localhost:3000', 
    credentials: true, // Allow credentials 
  })
);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/user', userRoutes);

app.use(checkForAuthentication);
app.get('/auth/me', getAuthUserId);
app.use(allRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {console.log(`Server Started at ${PORT}`);
    ConnectDB();


    
});
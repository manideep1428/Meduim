import express from 'express'
import { userRouter } from './routes/userRoutes';
import cookieParser from 'cookie-parser';
import { postRouter } from './routes/postRouter';
import cors from 'cors'

const app = express();

const port = 8080 || process.env.PORT 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors())
app.use("/api" , userRouter)
app.use("/v1" , postRouter)


app.listen(port, () => {
    console.log("Server is running at http://localhost:" + port);  
})
import expresss from "express";
import cors from 'cors'
import { GetDataRoutes } from "./Routes/GetDataRoutes.js";

const app = expresss();
const port = 3000;

app.use(cors())
app.use("/api", GetDataRoutes);

app.get('/' , (req , res)=>{
  res.json({
    "message": 'Welcome To AlloHealth Backend',
    "To Get Meals" : '/api/getmeals',
    "To Get tags" : '/api/gettags'
  })
})

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});

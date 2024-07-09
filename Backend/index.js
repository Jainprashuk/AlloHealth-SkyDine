import expresss from "express";
import cors from 'cors'
import { GetDataRoutes } from "./Routes/GetDataRoutes.js";

const app = expresss();
const port = 3000;

app.use(cors())
app.use("/api", GetDataRoutes);

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});

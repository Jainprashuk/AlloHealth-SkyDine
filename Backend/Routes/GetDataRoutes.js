import express from "express";
import { GetMeals } from "../Controllers/Meals.js";
import { GetTags } from "../Controllers/Categories.js";

const GetDataRoutes = express.Router();

GetDataRoutes.route("/getmeals").get(GetMeals);
GetDataRoutes.route("/gettags").get(GetTags);

export { GetDataRoutes };

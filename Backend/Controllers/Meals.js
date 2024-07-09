import { FetchDataFromJson } from "../Utils/FetchData.js";

const GetMeals = async (req, res) => {
    try {
        const jsondata = await FetchDataFromJson();
        const objdata = JSON.parse(jsondata);
        const GetAllMeals = objdata.meals;

        res.status(200).send({
            message: 'Success Getting All Meals',
            Meals: GetAllMeals
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: 'Error Getting Meals',
            error: error.message
        });
    }
};

export { GetMeals };

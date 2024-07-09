import { FetchDataFromJson } from "../Utils/FetchData.js";

const GetTags = async (req, res) => {
  try {
    const JsonData = await FetchDataFromJson();
    const objData = JSON.parse(JsonData);

    const AllTags = objData.labels;

    res.status(200).send({
      message: "Success Getting All Tags",
      AllTags: AllTags,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Error Getting Tags",
      error: error.message,
    });
  }
};

export { GetTags };

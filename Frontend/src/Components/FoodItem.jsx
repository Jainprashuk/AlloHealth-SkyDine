import React from "react";
import { useDispatch } from "react-redux";
import { AddToCart } from "../Redux/Slices/CartSlice";
import toast from "react-hot-toast";
import { useState } from "react";

const FoodItem = ({
  starter,
  id,
  tittle,
  price,
  desert,
  img,
  drinks,
  person,
  setperson,
}) => {
  const [selectedDrink, setDrink] = useState("Not Selected");
  const [selectedDrinkprice, setdrinkprice] = useState(0);

  const handleDrinks = async (drink) => {
    await setDrink(drink.id);
    await setdrinkprice(drink.price);
    console.log(selectedDrinkprice);
  };

  const dispatch = useDispatch();

  // Find the selected drink object
  const selectedDrinkObj = drinks.find((drink) => drink.id === selectedDrink);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center align-middle gap-2 mb-10">
        <div className="w-full md:w-1/3">
          <img
            src={img}
            alt={tittle}
            className="w-full"
          />
        </div>
        <div className="w-full md:w-2/3 px-3">
          <p className="text-gray-600">{tittle}</p>
          <h1 className="text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam!
          </h1>
          <p>
            <span className="font-medium">Starter:</span> {starter}
          </p>
          <p>
            <span className="font-medium">Desert:</span> {desert}
          </p>
          <p>
            <span className="font-medium">Selected Drink:</span>{" "}
            {selectedDrinkObj ? selectedDrinkObj.title : "None"}
          </p>

          <div className="block md:flex flex-col md:flex-row justify-between align-middle mt-3">
            <div className="flex justify-evenly md:justify-center align-middle gap-6 md:gap-2">
              {drinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleDrinks(item)}
                  className={`p-3 px-3 lg:px-6 bg-slate-300 rounded-lg border-2 ${
                    selectedDrink == item.id ? "bg-gray-100" : ""
                  }`}
                >
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                </button>
              ))}
            </div>

            <div className="mt-3 flex justify-center align-middle md:mt-0">
              <div className="flex mt-2 md:mt-0 md:block justify-center align-middle gap-3">
              <h1 className="my-auto">{price} €</h1>
              <button
                onClick={() => {
                  if (person === "None") {
                    toast.error("Please Select Person");
                  } else {
                    dispatch(
                      AddToCart({
                        starter,
                        id,
                        tittle,
                        price,
                        desert,
                        img,
                        drinks,
                        qty: 1,
                        person,
                        selectedDrinkprice,
                      })
                    );
                    toast.success("Item Added");
                  }
                }}
                className="border-blue-900 border-2 px-6 text-blue-900 py-2 rounded-md"
              >
                Select
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className='my-3 border-1 border-gray-600' />
    </div>
  );
};

export default FoodItem;

import React, { useState } from "react";
import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = ({ person, setperson }) => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [persons, setPersons] = useState(["Adult Passenger 1", "Adult Passenger 2"]);


  const TotalItemPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const TotalDrinkPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.selectedDrinkprice,
    0
  );

  const handlePersonClick = (person) => {
    setperson(person);
  };





  const navigate = useNavigate();

  const handleConfirmClick = () => {
    navigate("/success");
  };

  return (
    <div className="p-2">
      <div className="flex gap-2 align-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
        >
          <path d="M120-120v-80h720v80H120Zm74-200L80-514l62-12 70 62 192-52-162-274 78-24 274 246 200-54q32-9 58 12t26 56q0 22-13.5 39T830-492L194-320Z" />
        </svg>

        <p className="text-blue-700 font-bold">Select Meal</p>
      </div>

      <div className="border-2 bg-white mt-3">
        <div className="border-b-2 p-2">
          <p className="text-blue-700 text-lg">Riga - SI Petersburg</p>
          <p className="text-gray-500 text-sm">Flight Duration : 2h 49 min</p>
        </div>
        {persons.map((personName, index) => (
          <div
            key={index}
            className={`border-b-2 p-2 py-3 flex justify-between cursor-pointer ${
              person === personName && "border-blue-900 rounded-md border-2"
            }`}
            onClick={() => handlePersonClick(personName)}
          >
            <p>{personName}</p>
            {person === personName ? <p>Selected</p> : <p>Select Meal</p>}
          </div>
        ))}
        
      </div>

      <div className="p-3 border-2 mt-3">
        <h3 className="text-blue-700">{person}</h3>
        <div>
          {cartItems.map((item) => {
            return (
              item.person === person && (
                <CartItemCard
                  key={item.id}
                  starter={item.starter}
                  id={item.id}
                  tittle={item.tittle}
                  price={item.price}
                  desert={item.desert}
                  img={item.img}
                  drinks={item.drinks}
                  qty={item.qty}
                  person={person}
                  selectedDrinkprice={item.selectedDrinkprice}
                />
              )
            );
          })}
        </div>
      </div>

      <div className="flex justify-evenly mt-6">
        <div>
          <p className="my-auto">Meal Amount: {TotalItemPrice}</p>
          <p className="my-auto">Drinks Amount: {TotalDrinkPrice}</p>
          <p className="my-auto">Total Amount: {TotalDrinkPrice + TotalItemPrice}</p>
        </div>
        <button
          onClick={handleConfirmClick}
          className="p-2 px-4 text-blue-800 rounded-2xl border-2 border-blue-800"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Cart;

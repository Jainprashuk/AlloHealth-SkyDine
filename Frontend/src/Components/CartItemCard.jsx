import React from "react";
import { useDispatch } from "react-redux";
import { RemoveFromCart  , decrementQty, incrementQty} from "../Redux/Slices/CartSlice";
import toast from "react-hot-toast";

const CartItemCard = ({ starter, id, tittle, price, desert, img, drinks , qty ,person ,  selectedDrinkprice}) => {
  const dispatch = useDispatch()
  
  return (
    <div className="bg-gray-200 rounded-lg p-3 flex  justify-between my-3 mx-1">
      <div>{tittle} </div>
      <div>{price} + {selectedDrinkprice}€</div>
      <div className="flex justify-center align-middle gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-plus-circle"
          viewBox="0 0 16 16"
          onClick={() =>
            qty >= 1 ? dispatch(incrementQty({ id , person , selectedDrinkprice})) : (qty = 0)
          }
          
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg>
        <div className="">{qty}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-dash-circle"
          viewBox="0 0 16 16"
          onClick={() =>
            qty > 1 ? dispatch(decrementQty({ id ,person , selectedDrinkprice})) : (qty = 0)
          }
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-trash"
          viewBox="0 0 16 16"
          onClick={()=>{
            dispatch(RemoveFromCart({id , person , selectedDrinkprice}))
            toast.error("Item Deleted Successfully")
          }}
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
        </svg>
      </div>
    </div>
  );
};

export default CartItemCard;

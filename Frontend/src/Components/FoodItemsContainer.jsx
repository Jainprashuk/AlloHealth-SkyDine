import React, { useState, useEffect } from "react";
import FoodItem from "./FoodItem";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItemsContainer = ({ person, setperson }) => {
  const [FoodData, SetFoodData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; 

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch('https://allo-health-backend.vercel.app/api/getmeals');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        SetFoodData(data.Meals);
      } catch (error) {
        console.error('Error fetching tags:', error); 
      }
    };

    fetchTags();
  }, []);

  const category = useSelector((state) => state.category.category);

  const filteredFoodData = FoodData.filter((food) => {
    if (category === "All") {
      return true;
    } else {
      return food.labels.includes(category);
    }
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredFoodData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredFoodData.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="px-3 py-2">
        {currentItems.map((ele) => {
          return (
            <FoodItem
              key={ele.id}
              starter={ele.starter}
              id={ele.id}
              tittle={ele.title}
              price={ele.price}
              desert={ele.desert}
              img={ele.img}
              drinks={ele.drinks}
              person={person}
              setperson={setperson}
            />
          );
        })}
      </div>
      <div className="pagination flex justify-around align-middle">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          

        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
        </button>
      </div>
    </>
  );
};

export default FoodItemsContainer;

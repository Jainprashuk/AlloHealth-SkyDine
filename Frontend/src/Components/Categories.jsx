import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../Redux/Slices/CategorySlice";
import { useState , useEffect } from "react";

const Categories = () => {


  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch('https://allo-health-backend.vercel.app/api/gettags');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log('Fetched Data:', data); 
        setTags(data.AllTags);
      } catch (error) {
        console.error('Error fetching tags:', error); 
      }
    };

    fetchTags();
  }, []);


  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="flex flex-wrap gap-3 justify-center mt-2">
      <button
        onClick={() => dispatch(setCategory("All"))}
        className={`p-1 px-5 rounded-2xl border-2 border-blue-950 ${
          selectedCategory === "All" && "bg-gray-300 text-white"
        }`}
      >
        All
      </button>
      {tags.map((label, index) => (
        <button
          key={index}
          className={`p-1 px-5 rounded-2xl border-2 border-blue-950 ${
            selectedCategory === label.label && "bg-gray-300 text-white"
          }`}
          onClick={() => dispatch(setCategory(label.label))}
        >
          {label.label}
        </button>
      ))}
    </div>
  );
};

export default Categories;

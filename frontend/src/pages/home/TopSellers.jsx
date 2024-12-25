import { useEffect, useState } from "react";
import { BookCart } from "../books/BookCart";

const categories = ["Choose a general", "Business", "Fiction","Horror","Advanture"]

const TopSellers = () => {
  const [books, setBooks] =useState([]);
  const [selectedCategory, setselectedCategory] = useState("Choose a general");
    
    useEffect(() =>{
      fetch("books.json")
      .then(res => res.json())
      .then((data) => setBooks(data))
    }, [])

    const filteredBooks = selectedCategory === "Choose a general" ? books : books.filter(book => book.category === selectedCategory.toLowerCase())

    console.log(filteredBooks);
    
    
  return (
    <div className="py-10">
        <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
        {/* category filtering */}
        <div className="mb-8 flex items-center">
          <select 
          onChange={(e) => setselectedCategory(e.target.value)} 
          name="category" id="category" className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none">
             {
              categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))
             }
          </select>
        </div>
        {
          filteredBooks.map((book, index) =>(
             <BookCart key={index} book={book}/>
          ))
        }
    </div> 
  )
}

export default TopSellers;
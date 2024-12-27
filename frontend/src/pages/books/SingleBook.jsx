import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useFetchAllBooksQuery } from "../../redux/features/cart/booksApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice"; // Import addToCart action
import getImgUrl from "../../utils/getImgUrl";

const SingleBook = () => {
  const { id } = useParams(); // Extract book ID from route parameters
  const { data: books = [], isLoading, isError } = useFetchAllBooksQuery(); // Fetch all books
  const dispatch = useDispatch();

  // Find the book by ID
  const book = books.find((b) => b._id === id);

  // Add to cart handler
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    alert(`${product.title} added to cart!`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Failed to load book information.</div>;
  if (!book) return <div>Book not found.</div>; // Handle case where book is not found

  return (
    <div className="max-w-lg shadow-md p-5">
      <h1 className="text-2xl font-bold mb-6">{book.title}</h1>

      <div>
        <div>
          <img
            src={getImgUrl(book.coverImage) || "placeholder.jpg"} // Fallback to placeholder
            alt={book.title}
            className="mb-8"
          />
        </div>

        <div className="mb-5">
          <p className="text-gray-700 mb-2">
            <strong>Author:</strong> {book.author || "Admin"}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Published:</strong> {new Date(book.createdAt).toLocaleDateString()}
          </p>
          <p className="text-gray-700 mb-4 capitalize">
            <strong>Category:</strong> {book.category || "General"}
          </p>
          <p className="text-gray-700">
            <strong>Description:</strong> {book.description || "No description available."}
          </p>
        </div>

        <button
          onClick={() => handleAddToCart(book)}
          className="btn-primary px-6 space-x-1 flex items-center gap-1"
        >
          <FiShoppingCart />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default SingleBook;

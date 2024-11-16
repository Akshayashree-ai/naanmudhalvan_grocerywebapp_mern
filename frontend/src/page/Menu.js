import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AllProduct from "../component/AllProduct";
import { addCartItem } from "../redux/productSlide";

const Menu = () => {
  const { filterby } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productList);

  // Find the product by filterby parameter
  const productDisplay = productData.find((el) => el._id === filterby);

  // If no product is found, show an error or fallback UI
  if (!productDisplay) {
    return (
      <div className="flex items-center justify-center h-screen text-red-600 text-xl font-semibold">
        Product not found.
      </div>
    );
  }

  const handleAddCartProduct = () => {
    dispatch(addCartItem(productDisplay));
  };

  const handleBuy = () => {
    dispatch(addCartItem(productDisplay));
    navigate("/cart");
  };

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      <div className="w-full max-w-6xl m-auto md:flex bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Product Image Section */}
        <div className="w-full md:w-1/2 p-5">
          <img
            src={productDisplay.image || "fallback-image.jpg"} // Fallback image
            alt={productDisplay.name}
            className="hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col gap-4 p-5 md:w-1/2">
          <h3 className="font-bold text-slate-700 capitalize text-3xl md:text-5xl">
            {productDisplay.name}
          </h3>
          <p className="text-slate-500 font-medium text-lg md:text-xl">
            {productDisplay.category}
          </p>
          <p className="font-bold text-3xl md:text-4xl text-gray-800">
            <span className="text-red-500">₹</span>
            {productDisplay.price}
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleBuy}
              className="bg-yellow-500 py-2 px-4 rounded-lg text-white font-semibold hover:bg-yellow-600 transition-colors duration-300 shadow-md"
            >
              Buy Now
            </button>
            <button
              onClick={handleAddCartProduct}
              className="bg-yellow-500 py-2 px-4 rounded-lg text-white font-semibold hover:bg-yellow-600 transition-colors duration-300 shadow-md"
            >
              Add to Cart
            </button>
          </div>

          {/* Product Description */}
          <div className="mt-4">
            <h4 className="text-slate-600 font-semibold text-lg">Description:</h4>
            <p className="text-slate-500 leading-relaxed">{productDisplay.description}</p>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-10">
        <AllProduct heading="Related Products" />
      </div>
    </div>
  );
};

export default Menu;

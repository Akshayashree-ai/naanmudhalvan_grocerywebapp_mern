import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AllProduct from "../component/AllProduct";
import { addCartItem } from "../redux/productSlide";

const Menu = () => {
  const { filterby } = useParams(); // Get product ID from URL parameters
  const navigate = useNavigate(); // Hook for navigation
  const dispatch = useDispatch(); // Hook for Redux dispatch
  const productData = useSelector((state) => state.product.productList); // Fetch product list from Redux store

  // Debugging logs
  console.log("Filterby value:", filterby);
  console.log("Product Data:", productData);

  // Check if product data is loaded
  if (!productData || productData.length === 0) {
    return <div className="text-center">Loading products...</div>; // Show loading message if data is not available
  }

  // Find the product that matches the filterby parameter
  const productDisplay = productData.find((el) => String(el._id) === String(filterby));

  // Handle case where no product matches the filterby parameter
  if (!productDisplay) {
    return (
      <div className="text-center">
        <h2 className="text-red-500 text-2xl">Product not found</h2>
        <p>Check the URL or return to the homepage.</p>
      </div>
    );
  }

  // Handler to add product to the cart
  const handleAddCartProduct = () => {
    dispatch(addCartItem(productDisplay));
  };

  // Handler to buy product and navigate to the cart page
  const handleBuy = () => {
    dispatch(addCartItem(productDisplay));
    navigate("/cart");
  };

  return (
    <div className="p-2 md:p-4">
      <div className="w-full max-w-4xl m-auto md:flex bg-white shadow-md rounded-lg">
        {/* Product Image Section */}
        <div className="max-w-sm overflow-hidden w-full p-5">
          <img
            src={productDisplay.image}
            alt={productDisplay.name}
            className="hover:scale-105 transition-all h-full rounded-lg"
          />
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col gap-3 p-5">
          <h3 className="font-semibold text-slate-600 capitalize text-2xl md:text-4xl">
            {productDisplay.name}
          </h3>
          <p className="text-slate-500 font-medium text-xl">{productDisplay.category}</p>
          <p className="font-bold text-2xl">
            <span className="text-red-500">₹</span>
            <span>{productDisplay.price}</span>
          </p>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleBuy}
              className="bg-yellow-500 text-white py-2 px-4 mt-2 rounded hover:bg-yellow-600"
            >
              Buy
            </button>
            <button
              onClick={handleAddCartProduct}
              className="bg-yellow-500 text-white py-2 px-4 mt-2 rounded hover:bg-yellow-600"
            >
              Add to Cart
            </button>
          </div>

          {/* Product Description */}
          <div className="mt-4">
            <p className="text-slate-600 font-medium">Description:</p>
            <p>{productDisplay.description}</p>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <AllProduct heading={"Related Products"} />
    </div>
  );
};

export default Menu;

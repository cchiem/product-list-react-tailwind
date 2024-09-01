import { useEffect, useState } from "react";
import deserts from "./data.json";
import { Card } from "./components/Card";
import { Cart } from "./components/Cart";
import { Comfirm } from "./components/Comfirm";

function App() {
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shoppingCart, setShoppingCart] = useState({}); // Initialize shoppingCart as an object
  const [isModalOpen, setIsModalOpen] = useState(false);

  const increment = (itemPrice, name, thumbnail) => {
    setCount(count + 1);
    setTotalPrice(totalPrice + itemPrice);

    // Update shoppingCart
    setShoppingCart((prevCart) => {
      const newCart = { ...prevCart };

      if (newCart[name]) {
        newCart[name].quantity += 1; // Increment quantity
      } else {
        newCart[name] = { quantity: 1, price: itemPrice, thumbnail: thumbnail }; // Add new item
      }

      return newCart;
    });
  };

  const decrement = (itemPrice, name) => {
    setCount(count - 1);
    setTotalPrice(totalPrice - itemPrice);

    // Update shoppingCart
    setShoppingCart((prevCart) => {
      const newCart = { ...prevCart };

      if (newCart[name]) {
        if (newCart[name].quantity > 1) {
          newCart[name].quantity -= 1; // Decrement quantity
        } else {
          delete newCart[name]; // Remove item if quantity is 0
        }
      }

      return newCart;
    });
  };

  const removeItem = (itemName, quantity, price) => {
    setShoppingCart((prevCart) => {
      const newCart = { ...prevCart };
      setCount(count - quantity);
      setTotalPrice(totalPrice - quantity * price);
      delete newCart[itemName];
      return newCart;
    });
  };

  const resetCart = () => {
    setCount(0);
    setTotalPrice(0);
    setShoppingCart({});
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (isModalOpen) {
      resetCart(); // Reset the cart when closing the modal
    }
  };

  if (isModalOpen) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <div className="bg-[#FCF8F5] flex justify-center px-[90px] py-8 max-sm:flex-col max-sm:px-4">
        <div className="flex flex-col w-6/12 max-sm:w-full">
          <h2 className="text-[#1E0B05] font-[700] text-[40px] m-4">
            Desserts
          </h2>
          <div className="flex flex-wrap">
            {deserts.map((desert, index) => (
              <Card
                index={index}
                increment={increment}
                decrement={decrement}
                name={desert.name}
                image={desert.image.desktop}
                imageMobile={desert.image.mobile}
                title={desert.title}
                category={desert.category}
                price={desert.price}
                description={desert.description}
                quantity={shoppingCart[desert.name]?.quantity || 0} // Pass quantity as a prop
                thumbnail={desert.image.thumbnail}
              />
            ))}
          </div>
        </div>
        <div className="mt-4 max-sm:justify-center max-sm:flex max-sm:w-full">
          <Cart
            count={count}
            totalPrice={totalPrice}
            shoppingCart={shoppingCart}
            removeItem={removeItem}
            toggleModal={toggleModal}
          />
        </div>
      </div>

      {isModalOpen && (
        <Comfirm
          toggleModal={toggleModal}
          shoppingCart={shoppingCart}
          removeItem={removeItem}
          totalPrice={totalPrice}
        />
      )}
    </>
  );
}

export default App;

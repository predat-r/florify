import React, { useEffect, useState } from 'react';

function PopUp({ setAddedProductToCart }) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Show popup for 1 seconds, then trigger animation
    const showDuration = 1000; // 1 seconds
    const animationDuration = 500; // 0.5 second
    const showTimer = setTimeout(() => {
      setIsAnimating(true); // Start the animation after 1 second
    }, showDuration);
    const hideTimer = setTimeout(() => {
      setAddedProductToCart(false);
    }, showDuration + animationDuration + 1000);
    // Cleanup timers on component unmount
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [setAddedProductToCart]);

  return (
    <div
      className={`w-4/6 shadow-elevateLow md:w-4/12 flex flex-row h-[5vh] rounded-b-xl bg-green-200 p-2 absolute font-semibold items-center justify-around text-center font-inter top-0 text-bars left-20 sm:left-[55vh] ${
        isAnimating ? 'animate-popupSlideUp' : 'translate-y-0'
      }`}
    >
      <h1 className='text-xs sm:text-lg'>Product added successfully to Cart</h1>
    </div>
  );
}

export default PopUp;

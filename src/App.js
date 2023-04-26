import './App.css';
import styles from './App.module.css';
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

register();

function App() {
  const swiperElRef = useRef(null);

  const triggerHapticFeedback = () => {
    if (navigator.vibrate) {
      console.log('haptic');
      navigator.vibrate(50);
    }
  };

  useEffect(() => {
    // Set up a timer to trigger haptic pulse every 5 seconds
    const hapticPulseInterval = setInterval(() => {
      triggerHapticFeedback();
    }, 5000);

    // Clean up the timer when the component is unmounted
    return () => {
      clearInterval(hapticPulseInterval);
    };
  }, []);

  const handleAddToCart = (index) => {
    console.log(`Add to Cart clicked for slide ${index + 1}`);
  };

  return (
    <div>
      <header className="App-header">
        <swiper-container
          ref={swiperElRef}
          slides-per-view="3"
          navigation="true"
        >       
          {[...Array(10)].map((_, index) => (
            <swiper-slide key={index}>
              <div className={styles.slideContainer}>
                <img
                  className={styles.slideImage}
                  src="https://via.placeholder.com/300"
                  alt="Product"
                />
                <button
                  className={styles.addButton}
                  onClick={() => handleAddToCart(index)}
                >
                  Add to Cart
                </button>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </header>
    </div>
  );
}

export default App;

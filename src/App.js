import './App.css';
import styles from './App.module.css';
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

register();

function App() {
  const swiperElRef = useRef(null);

  const triggerHapticFeedback = () => {
    if (navigator.vibrate) {
      console.log('haptic')
      navigator.vibrate(50);
    }
  };

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
      triggerHapticFeedback();
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
      triggerHapticFeedback();
    });
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

import React, { useState, useEffect } from 'react';

// Define the type for the component's props
interface ClickerProps {
  level: number;
}

const Clicker: React.FC<ClickerProps> = ({ level }) => {
  const [coins, setCoins] = useState<number>(0);
  const [clicks, setClicks] = useState<number>(0);
  const [lastClickTime, setLastClickTime] = useState<number>(Date.now());

  const handleClick = () => {
    const now = Date.now();

    if (clicks < level && (now - lastClickTime >= 10800000)) {
      setClicks(clicks + 1);
      setCoins(coins + 1);
      setLastClickTime(now);
    }
  };

  useEffect(() => {
    if (clicks >= level) {
      const timer = setTimeout(() => setClicks(0), 10800000); // 3 hours
      return () => clearTimeout(timer);
    }
  }, [clicks, level]);

  return (
    <div className="clicker">
      <img src="clicker-image.png" alt="Clicker" onClick={handleClick} />
      <p>Coins: {coins}</p>
      <p>Clicks remaining: {level - clicks}</p>
      <p>Next click available in: {Math.max(0, 10800000 - (Date.now() - lastClickTime)) / 1000} seconds</p>
    </div>
  );
};

export default Clicker;

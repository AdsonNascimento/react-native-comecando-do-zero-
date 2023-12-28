import { useState } from 'react';

export const useOrientationConfig = () => {
  const [flexDirection, setFlexDirection] = useState('column');

  const handleArrowSelection = (direction) => {
    switch (direction) {
      case 'up':
        setFlexDirection('column');
        break;
      case 'down':
        setFlexDirection('column-reverse');
        break;
      case 'left':
        setFlexDirection('row');
        break;
      case 'right':
        setFlexDirection('row-reverse');
        break;
      default:
        break;
    }
  };

  return {
    flexDirection,
    handleArrowSelection,
  };
};

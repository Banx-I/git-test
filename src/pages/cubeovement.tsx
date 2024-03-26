import { useState } from 'react';

type ObjectState = { x: number; y: number };

const CubeMovement = () => {
  const [objectArrayState, setObjectArrayState] = useState<ObjectState[]>([]);

  const addObjectToArray = () => {
    const lastObject = objectArrayState[objectArrayState.length - 1];
    const newX = lastObject ? lastObject.x + 60 : 0;
    setObjectArrayState((prevArray) => [...prevArray, { x: newX, y: 50 }]);
  };

  const removeObjectFromArray = () => {
    setObjectArrayState((prevArray) => prevArray.slice(0, -1));
  };

  return (
    <div className="container">
      {objectArrayState.map((obj, index) => (
        <div
          key={index}
          className="container__box" 
          style={{
            width: '40px',
            height: '40px',
            backgroundColor: 'blue',
            position: 'absolute',
            top: `${obj.y}px`,
            left: `${obj.x}px`,
          }}
        />
      ))}

      <button onClick={addObjectToArray}>Add Object to Array</button>
      <button onClick={removeObjectFromArray}>Remove Object from Array</button>
    </div>
  );
};

export default CubeMovement;

import { useState } from 'react';



const StateTest = () => {
  // Definicija tipova 
  type StringState = string;
  type StringArrayState = string[];
  type NumberState = number;
  type NumberArrayState = number[];
  type ObjectState = object;
  type ObjectArrayState = object[];
  type BooleanState = boolean;


  // Tip podataka
  const [stringValue, setStringValue] = useState<StringState>('Initial string');
  const [stringArrayValue, setStringArrayValue] = useState<StringArrayState>(['Item 1', 'Item 2']);
  const [numberValue, setNumberValue] = useState<NumberState>(0);
  const [numberArrayValue, setNumberArrayValue] = useState<NumberArrayState>([1, 2, 3]);
  const [objectValue, setObjectValue] = useState<ObjectState>({ key: 'value' });
  const [objectArrayValue, setObjectArrayValue] = useState<ObjectArrayState>([{ key: 'value' }, { key: 'another value' }]);
  const [booleanValue, setBooleanValue] = useState<BooleanState>(true);


  // Funkcije za promjenu pojedinačnih stanja
  const changeStringValue = () => setStringValue('New string value');
  const changeNumberValue = () => setNumberValue(prevValue => prevValue + 1);
  const changeObjectValue = () => setObjectValue({ key: 'new value' });
  const toggleBooleanValue = () => setBooleanValue(prevValue => !prevValue);

  // Funkcije za dodavanje i brisanje elementa iz array-a
  const addItemToStringArray = () => setStringArrayValue(prevArray => [...prevArray, `Item ${prevArray.length + 1}`]);
  const removeItemFromStringArray = () => setStringArrayValue(prevArray => prevArray.slice(0, -1));
  const addItemToNumberArray = () => setNumberArrayValue(prevArray => [...prevArray, prevArray.length + 1]);
  const removeItemFromNumberArray = () => setNumberArrayValue(prevArray => prevArray.slice(0, -1));
  const addItemToObjectArray = () => setObjectArrayValue(prevArray => [...prevArray, { key: 'new value' }]);
  const removeItemFromObjectArray = () => setObjectArrayValue(prevArray => prevArray.slice(0, -1));

  return (
    <>
      {/* Ispis vrijednosti u browseru */}
      <p>{stringValue}</p>
      <p>{stringArrayValue.join(', ')}</p>
      <p>{numberValue}</p>
      <p>{numberArrayValue.join(', ')}</p>
      <p>{JSON.stringify(objectValue)}</p>
      <p>{objectArrayValue.map(obj => JSON.stringify(obj)).join(', ')}</p>
      <p>{booleanValue.toString()}</p>
      

      {/* Pozivanje funkcija za promjenu stanja */}
      <button onClick={changeStringValue}>Change String Value</button>
      <button onClick={changeNumberValue}>Increment Number Value</button>
      <button onClick={changeObjectValue}>Change Object Value</button>
      <button onClick={toggleBooleanValue}>Toggle Boolean Value</button>

      {/* Pozivanje funkcija za dodavanje i brisanje elemenata iz array-a */}
      <button onClick={addItemToStringArray}>Add Item to String Array</button>
      <button onClick={removeItemFromStringArray}>Remove Item from String Array</button>
      <button onClick={addItemToNumberArray}>Add Item to Number Array</button>
      <button onClick={removeItemFromNumberArray}>Remove Item from Number Array</button>
      <button onClick={addItemToObjectArray}>Add Item to Object Array</button>
      <button onClick={removeItemFromObjectArray}>Remove Item from Object Array</button>

     
    </>
  );
};

export default StateTest;
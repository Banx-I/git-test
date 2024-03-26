import { useState } from 'react';

// Definicija tipa Props izvan komponente
type Props = {
  stringValue: string;
  stringArrayValue: string[];
  numberValue: number;
  numberArrayValue: number[];
  objectValue: { key: string };
  objectArrayValue: { key: string }[];
  booleanValue: boolean;
};

const StateTest = () => {
  // Korištenje useState unutar komponente za inicijalizaciju stanja s proslijeđenim vrijednostima iz propsa
  const [stringValueState, setStringValueState] = useState<Props['stringValue']>('Initial string');
  const [stringArrayValueState, setStringArrayValueState] = useState<Props['stringArrayValue']>(['Item 1', 'Item 2']);
  const [numberValueState, setNumberValueState] = useState<Props['numberValue']>(0);
  const [numberArrayValueState, setNumberArrayValueState] = useState<Props['numberArrayValue']>([1, 2, 3]);
  const [objectValueState, setObjectValueState] = useState<Props['objectValue']>({ key: 'value' });
  const [objectArrayValueState, setObjectArrayValueState] = useState<Props['objectArrayValue']>([{ key: 'value' }, { key: 'another value' }]);
  const [booleanValueState, setBooleanValueState] = useState<Props['booleanValue']>(true);

  // Funkcije za promjenu pojedinačnih stanja
  const changeStringValue = () => setStringValueState('New string value');
  const changeNumberValue = () => setNumberValueState(prevValue => prevValue + 1);
  const changeObjectValue = () => setObjectValueState({ key: 'new value' });
  const toggleBooleanValue = () => setBooleanValueState(prevValue => !prevValue);

  // Funkcije za dodavanje i brisanje elemenata iz array-a
  const addItemToStringArray = () => setStringArrayValueState(prevArray => [...prevArray, `Item ${prevArray.length + 1}`]);
  const removeItemFromStringArray = () => setStringArrayValueState(prevArray => prevArray.slice(0, -1));
  const addItemToNumberArray = () => setNumberArrayValueState(prevArray => [...prevArray, prevArray.length + 1]);
  const removeItemFromNumberArray = () => setNumberArrayValueState(prevArray => prevArray.slice(0, -1));
  const addItemToObjectArray = () => setObjectArrayValueState(prevArray => [...prevArray, { key: 'new value' }]);
  const removeItemFromObjectArray = () => setObjectArrayValueState(prevArray => prevArray.slice(0, -1));

  return (
    <>
      {/* Ispis vrijednosti u browseru */}
      <p>{stringValueState}</p>
      <p>{stringArrayValueState.join(', ')}</p>
      <p>{numberValueState}</p>
      <p>{numberArrayValueState.join(', ')}</p>
      <p>{JSON.stringify(objectValueState)}</p>
      <p>{objectArrayValueState.map(obj => JSON.stringify(obj)).join(', ')}</p>
      <p>{booleanValueState.toString()}</p>

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

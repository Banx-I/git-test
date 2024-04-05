import  { SetStateAction, useState } from "react";

type Animal = {
  name: string;
  type: string;
  habitat: string;
  
};
type Columns = {
  columns?: number;
}



const animals: Animal[] = [
  { name: "Lion", type: "Mammal", habitat: "Savannah" },
  { name: "Tiger", type: "Mammal", habitat: "Jungle" },
  { name: "Eagle", type: "Bird", habitat: "Mountains" },
  { name: "Shark", type: "Fish", habitat: "Ocean" },
  { name: "Elephant", type: "Mammal", habitat: "Savanna, grasslands, forests" },
  { name: "Cheetah", type: "Mammal", habitat: "Grasslands, savannas" },
  { name: "Gorilla", type: "Mammal", habitat: "Tropical rainforests" },
  { name: "Dolphin", type: "Mammal", habitat: "Oceans" },
  { name: "Snake", type: "Reptile", habitat: "Varies (forests, deserts, grasslands)" },
  { name: "Turtle", type: "Reptile", habitat: "Oceans, freshwater, land" },
  { name: "Owl", type: "Bird", habitat: "Forests, mountains, grasslands" },
  { name: "Penguin", type: "Bird", habitat: "Oceans" },
  { name: "Crocodile", type: "Reptile", habitat: "Freshwater, saltwater" },
  { name: "Spider", type: "Arachnid", habitat: "Varies (forests, homes, gardens)" },
];



const UseStateComponent = ({ }: Columns) => {
 
  const [searchText, setSearchText] = useState("");

  
  const findAnimal = (name: string) => {
    const foundAnimal = animals.find((animal) => animal.name === name);
    return foundAnimal;
  };

 
  const handleSearchChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSearchText(e.target.value);
  };

 
  const searchedAnimal = findAnimal(searchText);

  return (
    <div className="animal-search">
      <input
        type="text"
        value={searchText}
        onChange={handleSearchChange}
        placeholder="Unesite naziv životinje"
      />

      {searchedAnimal && searchText && (
        <div>
          <p>Pronađena životinja: {searchedAnimal.name}</p>
          <p>Vrsta: {searchedAnimal.type}</p>
          <p>Stanište: {searchedAnimal.habitat}</p>
        </div>
      )}

      {!searchedAnimal && searchText && <p>Živinja s tim imenom nije pronađena.</p>}
      <h2>Sve životinje</h2>
      <ul className="animal" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '10px' }}>
        {animals.map((animal) => (
          <li key={animal.name}>
            <p><b>Naziv:</b> {animal.name}</p>
            <p><b>Vrsta:</b> {animal.type}</p>
            <p><b>Stanište:</b> {animal.habitat}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseStateComponent;
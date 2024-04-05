import { useState } from "react";
import IconClose from "../assets/close";
import IconDelete from "../assets/delete";

// Definiranje tipa podataka za strukturu svakog voća
type FruitType = {
  id: string;
  name: string;
  color: string;
};

// Podaci o voću  //  naziv propsa
const fruitData: FruitType[] = [
  {
    id: "123",
    name: "Bengal Cat",
    color: "Orange",
  },
  {
    id: "123",
    name: "Maine Coon",
    color: "Red",
  },
  {
    id: "003",
    name: "Tiger Cat",
    color: "Yellow",
  },
  {
    id: "004",
    name: "Oriental Cat",
    color: "White",
  },
  {
    id: "005",
    name: "Siamese Cat",
    color: "Black",
  },
  {
    id: "006",
    name: "Sphynx Cat",
    color: "white",
  },
  {
    id: "007",
    name: "Orange  Cat",
    color: "Orange",
  },
  {
    id: "008",
    name: "Pear  Cat",
    color: "Green",
  },
  {
    id: "009",
    name: "Pineapple Cat",
    color: "yellow",
  },
  {
    id: "010",
    name: "Watermelon Cat",
    color: "red",
  },
  {
    id: "011",
    name: "Coconut Cat",
    color: "brown",
  },
  {
    id: "1080",
    name: "Avocado Cat",
    color: "green",
  },
];

// Komponenta Galerija
const Gallery = () => {
  // Korištenje useState kuke za upravljanje stanjem
  const [data, setData] = useState<FruitType[]>(fruitData); // Stanje za podatke o voću
  const [activeItem, setActiveItem] = useState<FruitType | null>(null); // Stanje za aktivni element voća
     //koristimo hook // naziv koji hoćemo   // props

  // Funkcija za postavljanje aktivnog elementa voća
  const handleActiveItem = (fruit: FruitType) => {
    setActiveItem(fruit);   // određujemo
  };            // određeno

  // Funkcija za brisanje elementa voća
  const handleDelete = (id: string) => {
    // Filtriranje podataka kako bi se izbacila stavka s određenim ID-om
    const newState = data.filter((item) => item.id !== id);
    // Ažuriranje stanja s filtriranim nizom
    setData(newState);
  };

  return (
    <>
      {/* Galerija slika voća */}
      <div className="gallery">
        {/* Prikaz slika voća */}
        {data.map((cat) => {
                 // ime postavljamo koje želimo
          return (
            <img
              // Postavljanje aktivnog elementa kada se klikne slika
              onClick={() => handleActiveItem(cat)}
              className="gallery__img"
              key={cat.id} // Jedinstveni ključ za svaku sliku
              src={`https://source.unsplash.com/random/?${cat.name}`} // Izvor slike
              alt={`${cat.name}`} // Alternativni tekst za sliku
            />
          );
        })}
      </div>
      {/* Modal za prikaz aktivnog elementa voća */}
      {activeItem && (
        <>
          <div className="gallery__modal">
            {/* Gumb za brisanje */}
            <div
              className="gallery__delete"
              onClick={() => {
                // Poziv funkcije za brisanje i resetiranje aktivnog elementa
                handleDelete(activeItem.id);
                setActiveItem(null);
              }}
            >
              <IconDelete />
            </div>
            {/* Gumb za zatvaranje */}
            <div className="gallery__close" onClick={() => setActiveItem(null)}>
              <IconClose />
            </div>
            {/* Prikaz informacija o aktivnom elementu voća */}
            <div className="gallery__info">
              <div>Ime: {activeItem.name}</div>
              <div>Boja: {activeItem.color}</div>
            </div>
            {/* Prikaz slike aktivnog elementa voća */}
            <img
              src={`https://source.unsplash.com/random/?${activeItem.name}`} // Izvor slike
              alt={activeItem.name} // Alternativni tekst za sliku
            />
          </div>
          {/* Preklapanje koje prekriva ostatak stranice kada je modal otvoren */}
          <div
            className="gallery__overlay"
            onClick={() => setActiveItem(null)} // Zatvaranje modala kada se klikne preklapanje
          ></div>
        </>
      )}
    </>
  );
};

export default Gallery;

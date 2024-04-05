import { useState } from "react";


type Gitara  = {
    ime: string;
    model: string;
    boja: string;
    godinaProizvodnje: number;
    id: number;
  };
  
  const gitare : Gitara[] = [
    {
      ime: "Fender Stratocaster",
      model: "Standard",
      boja: "Sunburst",
      godinaProizvodnje: 2010,
      id: 1200
    },
    {
      ime: "Gibson Les Paul",
      model: "Classic",
      boja: "Tobacco Burst",
      godinaProizvodnje: 2015,
      id: 2500
    },
    {
      ime: "PRS Custom 24",
      model: "SE",
      boja: "Gray Black",
      godinaProizvodnje: 2018,
      id: 900
    },
    {
      ime: "Ibanez RG",
      model: "550",
      boja: "Neon Pink",
      godinaProizvodnje: 1992,
      id: 800
    },
    {
      ime: "Fender Stratocaster",
      model: "Standard",
      boja: "Sunburst",
      godinaProizvodnje: 2010,
      id: 1200
    },
    {
      ime: "Gibson Les Paul",
      model: "Classic",
      boja: "Tobacco Burst",
      godinaProizvodnje: 2015,
      id: 2500
    },
    {
      ime: "PRS Custom 24",
      model: "SE",
      boja: "Gray Black",
      godinaProizvodnje: 2018,
      id: 900
    },
    {
      ime: "Ibanez RG",
      model: "550",
      boja: "Neon Pink",
      godinaProizvodnje: 1992,
      id: 800
    },
    {
      ime: "Jackson Soloist",
      model: "SL2",
      boja: "Metallic Blue",
      godinaProizvodnje: 2005,
      id: 1500
    },
    {
      ime: "Epiphone Casino",
      model: "Standard",
      boja: "Cherry Red",
      godinaProizvodnje: 2020,
      id: 700
    },
    {
      ime: "Gretsch Streamliner",
      model: "G2622",
      boja: "Sahara Metallic",
      godinaProizvodnje: 2019,
      id: 1000
    },
    {
      ime: "ESP LTD EC-1000",
      model: "Vintage Black",
      boja: "Black",
      godinaProizvodnje: 2017,
      id: 1100
    },
    {
      ime: "Taylor 314ce",
      model: "Grand Auditorium",
      boja: "Natural",
      godinaProizvodnje: 2014,
      id: 2200
    },
    {
      ime: "Martin D-28",
      model: "Standard Series",
      boja: "Sunburst",
      godinaProizvodnje: 2019,
      id: 3000
    }
  ];
  
  const Gitare = () => {
    const [minCijena, setMinCijena] = useState(0);
    const [maxCijena, setMaxCijena] = useState(3000);
  
    const filtriraneGitare = (gitare: Gitara[], minCijena: number, maxCijena: number): Gitara[] => {
      return gitare.filter((gitara) => gitara.id >= minCijena && gitara.id <= maxCijena);
    };
  
    return (
      <>
        <input
          type="number"
          value={minCijena}
          onChange={(e) => setMinCijena(parseInt(e.target.value))}
          placeholder="Minimalna cijena"
        />
  
        <input
          type="number"
          value={maxCijena}
          onChange={(e) => setMaxCijena(parseInt(e.target.value))}
          placeholder="Maksimalna cijena"
        />
  
        <ul className="gitare">
          {filtriraneGitare(gitare, minCijena, maxCijena).map((guitar) => (
            <li key={guitar.id}>
              <p><b>Cijena:</b> {guitar.id}</p>
              <p><b>Model:</b> {guitar.model}</p>
              <p><b>Boja:</b>{guitar.boja}</p>
              <p><b>Godina Proizvodnje:</b> {guitar.godinaProizvodnje}</p>
            </li>
          ))}
        </ul>
      </>
    );
  };
  
  export default Gitare;



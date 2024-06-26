import { useState, useEffect } from 'react';

type Berry = {
  name: string;
  url: string;
  img: string;
};

const Pokemon = () => {
  const [berries, setBerries] = useState<Berry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBerries = () => {
      fetch('https://pokeapi.co/api/v2/berry/')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          const berryPromises = data.results.map((berry: Berry) => {
            return fetch(berry.url)
              .then((response) => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                return response.json();
              })
              .then((berryData) => {
                const berryName = berryData.name;
                const imgUrl = `https://pokeapi.co/api/v2/item/${berryData.id}/`;
                return fetch(imgUrl)
                  .then((imgUrlResponse) => {
                    if (!imgUrlResponse.ok) {
                      throw new Error('Network response for image was not ok');
                    }
                    return imgUrlResponse.json();
                  })
                  .then((imgUrlData) => {
                    const img = imgUrlData.sprites.default;
                    return {
                      name: berryName,
                      url: berry.url,
                      img: img,
                    };
                  });
              });
          });
          Promise.all(berryPromises)
            .then((berryData) => {
              setBerries(berryData);
              setLoading(false);
            })
            .catch((error) => {
              console.error('Error fetching berries:', error);
              setLoading(false);
            });
        })
        .catch((error) => {
          console.error('Error fetching berries:', error);
          setLoading(false);
        });
    };
    fetchBerries();
  }, []);

  return (
    <>
      <h1>Pokemon Berries</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
          {berries.map((berry, index) => (
            <li key={index}>
              <div style={{display: `flex`, alignItems: `center`}}>
                <img
                  src={berry.img}
                  alt={berry.name}
                  style={{
                    width: '70px',
                    height: '70px',
                  }}
                />
                <span>{berry.name}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Pokemon;

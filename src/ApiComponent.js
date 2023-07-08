import React, { useEffect, useState } from 'react';

const ApiComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character/'); // Reemplaza la URL con la dirección de la API que deseas consumir
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          
        </ul>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default ApiComponent;

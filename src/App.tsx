import React, { useEffect, useState } from 'react';
import Autocomplete from './Autocompete';
import { getProducts } from './Service/Api';

const App: React.FC = () => {

  const [options ,setOptions]= useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setOptions(products.products);
    };

    fetchProducts(); 

  }, []);


  return (
    <div>
      <h1>React Autocomplete Component</h1>
      <Autocomplete options={options} />
    </div>
  );
};

export default App;

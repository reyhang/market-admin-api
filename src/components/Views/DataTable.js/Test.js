import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";


export default function Test() {
  const [product, setProduct] = useState([
  ]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    setLoading(false);
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredCountries(
      product.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, product]);

  if (loading) {
    return <p>Loading product...</p>;
  }

  return (
    <div className="App">
      <h1>Countries Lists</h1>
 
      <input
        type="text"
        placeholder="Search Countries"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredCountries.map((item, idx) => (
      <tr>
                          <th scope="row"> {idx + 1} </th>
                          <td>{item.title} </td>
                          <td>{item.price} </td>
                          <td>{item.barcode} </td>
                        
                        </tr>
      ))}
    </div>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<Test />, rootElement);

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination, Stack } from "@mui/material";
import usePagination from "./Pagination";
import { Box} from "@mui/material";


export default function DataTable() {
  const [product, setProduct] = useState([]);
  let [page,setPage] = useState(1);
  const PER_PAGE =5;

  const count = Math.ceil(product.length/PER_PAGE)
  const _DATA = usePagination(product,PER_PAGE)

  const handleChange = (e,p) => {
    setPage(p)
    _DATA.jump(p)
  }

  const getProducts = async () => {
    await axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Ürünler</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Anasayfa</a>
            </li>
            <li className="breadcrumb-item">Ürünler</li>
          </ol>
        </nav>
      </div>

      {/* End Page Title */}
      <section className="section">
        <div className="row justify-content-center ">
          <div className="col-lg-11">
            <div className="card" style={{ minHeight: "500px" }}>
              <div className="card-body">
                <h5 className="card-title">Ürün Listesi</h5>
                {/* Table with stripped rows */}
                <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                  <div className="dataTable-top">
                    <div className="dataTable-dropdown">
                      <label>
                        <select className="dataTable-selector">
                          <option value={5}>5</option>
                          <option value={10} selected>
                            10
                          </option>
                          <option value={15}>15</option>
                          <option value={20}>20</option>
                          <option value={25}>25</option>
                        </select>
                      </label>
                    </div>
                    <div className="dataTable-search">
                      <input
                        className="dataTable-input"
                        placeholder="Arama..."
                        type="text"
                        style={{
                          borderRadius: 3,
                          borderWidth: 1,
                          borderColor: "grey",
                          marginBottom: 10,
                          width: 200,
                        }}
                      />
                    </div>
                  </div>
                  <table className="table datatable">
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">Ürün İsmi</th>
                        <th scope="col">Ürün Fiyatı</th>
                        <th scope="col">Barkod Numarası</th>
                        <th scope="col">Düzenle</th>
                      </tr>
                    </thead>
                   
                      <tbody> {_DATA.currentData().map((item, index) => (
                        <tr >
                          <th scope="row"> {index + 1} </th>
                          <td>{item.title} </td>
                          <td>{item.price} </td>
                          <td>{item.barcode} </td>
                          <td>

                            <i
                              class="bi-dash-square"
                              
                              style={{ color: "tomato", marginRight: 10 }}
                            />
                            <i
                              class="bi-pencil-square"
                              style={{ color: "cornflowerblue" }}
                            />
                          </td>
                        </tr> ))}
                      </tbody>
                   
                  </table>
                </div>
                <div className="d-flex justify-content-center">
                  <Box>
                  
                    <Pagination count={count} color="primary" size="large" page={page} onChange={handleChange} />
                  
                  </Box>
                </div>

                <div className="dataTable-bottom  ">
                  <div className="dataTable-info">
                    Showing {product.length} entries
                  </div>
                  <nav className="dataTable-pagination">
                    <ul className="dataTable-pagination-list" />
                  </nav>
                </div>
              </div>
              {/* End Table with stripped rows */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

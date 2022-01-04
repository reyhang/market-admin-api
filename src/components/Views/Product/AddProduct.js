import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddProduct() {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    barcode: "",
    imageUrl: "",
  });

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const addProduct = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:3000/products", product)
      .then((res) => {
        toast(
          <div
            style={{
              color: "seagreen",
            }}
          >
           {res.data.message}  <i className="bi bi-check2-square" />
          </div>
        );
      })

      .catch((e) => {
        toast(
          <div
            style={{
              color: "darksalmon",
            }}
          > 
          {e.response.data.message[0]}
            <i className="bi bi-x-square" />
          </div>
        );
      });
  };


  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Ürün Ekle</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Anasayfa</Link>
            </li>
            <li className="breadcrumb-item">Ürün Ekle</li>
          </ol>
        </nav>
      </div>
      {/* End Page Title */}
      <section className="section">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"></h5>

                <form
                  className="row g-4 justify-content-center"
                  onSubmit={addProduct}
                >
                  <div className="col-6">
                    <label className="form-label">Ürün İsmi</label>
                    <input
                      className="form-control"
                      type="text"
                      name="title"
                      value={product.title}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-4">
                    <label className="form-label">Ürün Fiyatı</label>
                    <input
                      type="text"
                      className="form-control"
                      name="price"
                      value={product.price}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-4">
                    <label className="form-label">Barkod Numarası</label>
                    <input
                      type="string"
                      className="form-control"
                      name="barcode"
                      value={product.barcode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-6">
                    <label className="form-label">Ürün Fotoğrafı</label>
                    <input
                      type="text"
                      className="form-control"
                      name="imageUrl"
                      value={product.imageUrl}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="text-center" style={{ marginTop: 55 }}>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ marginRight: 10 }}
                    >
                      Kaydet
                    </button>
                    <button type="reset" className="btn btn-secondary">
                      Sıfırla
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

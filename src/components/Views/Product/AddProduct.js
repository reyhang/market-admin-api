import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import BarcodeScannerComponent from "react-qr-barcode-scanner";



export default function AddProduct() {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    barcode: "",
    imageUrl: "",
  });

  const [ data, setData ] = React.useState('Barkodu Kameraya Okutunuz.');


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
              justifyContent:"center"
            }}
          > 
          <p>Hatalı giriş yaptınız. Lütfen kontrol ediniz.  <i className="bi bi-x-square" /></p>
           
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
                <h5 className="card-title">-</h5>

                <form
                  className="col-12 justify-content-center"
                  onSubmit={addProduct}
                >
                  <div className="col-5">
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
                  <div className="col-5">
                    <label className="form-label">Ürün Fiyatı</label>
                    <input
                      type="text"
                      className="form-control"
                      name="price"
                      value={product.price}
                      onChange={handleChange}
                      required
                    />
                  </div>{" "}
                  <div className="col-5">
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
                  <div className="col-5">
                    <label className="form-label">Barkod Numarası</label>
                       <BarcodeScannerComponent
                      width={250}
                      height={200}
                        onUpdate={(err, result) => {
                          setData(result)
                     
                      }}
                    />
                    
                    <input
                      type="string"
                      className="form-control"
                      name="barcode"
                      value={data}
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

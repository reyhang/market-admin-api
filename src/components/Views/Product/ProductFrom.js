import React from "react";
import { Link } from "react-router-dom";

export default function ProductForm() {
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
                <h5 className="card-title">Ürün Ekle</h5>

                <form className="row g-4 justify-content-center">
                  <div className="col-4">
                    <label className="form-label">Ürün İsmi</label>
                    <input type="text" className="form-control" id="title" />
                  </div>
                  <div className="col-6">
                    <label className="form-label">Ürün Fiyatı</label>
                    <input type="number" className="form-control" id="price" />
                  </div>
                  <div className="col-4">
                    <label className="form-label">Barkod Numarası</label>
                    <input
                      type="string"
                      className="form-control"
                      id="barcode"
                    />
                  </div>
                  <div className="col-6">
                    <label className="form-label">Ürün Fotoğrafı</label>
                    <input type="file" className="form-control" id="image" />
                  </div>
                  <div className="text-center" style={{ marginTop: 55}}>
                    <button type="submit" className="btn btn-primary" style={{marginRight:10}} >
                      Submit
                    </button>
                    <button type="reset" className="btn btn-secondary">
                      Reset
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

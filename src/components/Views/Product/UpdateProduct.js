import { Icon } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function UpdateProduct() {

  const { id } = useParams();


const[product,setProduct] = useState({
  title:"",
  price:"",
  barcode:"",
  imageUrl:""
})


const handleChange = (event) => {
  setProduct({ ...product, [event.target.name]:event.target.value });
};


const getProduct = async () => {
    await axios.get(`http://localhost:3000/products/${id}`)
    .then((res) => {
        setProduct({
          title:res.data.title,
          price:res.data.price,
          barcode:res.data.barcode,
          imageUrl:res.data.imageUrl,
        })
    })
}

 useEffect(() => {
    getProduct()    
//eslint-disable-next-line
}, [])

const updateProduct =  (e) => {
  e.preventDefault()

    axios
      .put(`http://localhost:3000/products/${id}`,product)
      .then(()=>{
        getProduct();
        toast(
          <div
       
            style={{
              color: "seagreen",
              
            }}
          >
          Güncelleme başarıyla kaydedildi <i className="bi bi-check2-square" />  
           
          </div> ,
          {
            position: "top-right",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      })
      .catch((e) => console.log(e));
}

  


  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Ürün Düzenle</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Anasayfa</Link>
            </li>
            <li className="breadcrumb-item">Ürün Düzenle</li>
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

                <form className="row g-4  justify-content-center" onSubmit={updateProduct}>
                  <div className="col-6">
                    <label className="form-label" >Ürün İsmi</label>
                    <input
                      className="form-control"
                      type="text"
                      name="title"
                      value={product.title}
                      onChange={handleChange} />
                    
                  </div>
                  <div className="col-4">
                    <label className="form-label">Ürün Fiyatı</label>
                    <input
                      type="text"
                      className="form-control"
                      name="price"
                      value={product.price}
                      onChange={handleChange} />
                    
                  </div>
                  <div className="col-4">
                    <label className="form-label">Barkod Numarası</label>
                    <input
                      type="string"
                      className="form-control"
                      name="barcode"
                      value={product.barcode}
                      onChange={handleChange} />
                    
                  </div>
                  <div className="col-6">
                    <label className="form-label">Ürün Fotoğrafı</label>
                    <input
                      type="text"
                      className="form-control"
                      name="imageUrl"
                      value={product.imageUrl}
                      onChange={handleChange} />

                  </div>
                  <div className="text-center" style={{ marginTop: 55 }}>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ marginRight: 10 }}
                    >
                      Güncelle
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

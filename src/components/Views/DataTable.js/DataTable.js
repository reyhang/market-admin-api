import React from "react";


export default function DataTable() {

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
          <div className="row">
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
                          <th scope="col">Ürün Fiyat</th>
                          <th scope="col">Barkod Numarası</th>
                          <th scope="col">Ürün Fotoğrafı</th>
                          <th scope="col">Düzenle</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                          <td>
                            {" "}
                            <i
                              class="bi-dash-square"
                              style={{ color: "tomato", marginRight: 10 }}
                              onClick={() => alert("Silindi")}
                            />
                            <i
                              class="bi-pencil-square"
                              style={{ color: "cornflowerblue" }}
                              onClick={() => alert("Düzenlendi")}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                          <td>
                            {" "}
                            <i
                              class="bi-dash-square"
                              style={{ color: "tomato", marginRight: 10 }}
                            />
                            <i
                              class="bi-pencil-square"
                              style={{ color: "cornflowerblue" }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="dataTable-bottom  ">
                    <div className="dataTable-info">Showing 1 entries</div>
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
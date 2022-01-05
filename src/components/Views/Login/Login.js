import jwtDecode from "jwt-decode"
import React,{useState,useEffect} from "react"
import AuthContext from "../../../context/JWTAuthContext"
import useAuth from "../../../hooks/useAuth"
import history from "../../../history"
import { toast } from 'react-toastify';



export default function Login() {
  

  const {login}=useAuth()
    const [loginData,setLoginData] = useState({
        email:'',
        password:'',
    })

    useEffect(() => {
      const token = localStorage.getItem('token')
     if(token){
      const decodedToken = jwtDecode(token)
      const currentTime = Date.now()/1000
      if(decodedToken.exp>currentTime){
          return history.pushState()
      }
     }
  }, [])

  const handleChange = (e)=>{
        
    const {type,value}=e.target;
    if(type==='text'){
        setLoginData((prevState)=>({...prevState,email:value}))
    }else{
        setLoginData((prevState)=>({...prevState,password:value}))
 
    }
}

const handleSubmit = async (e)=>{
  e.preventDefault();
 try {
     if(loginData.email.length<15 || loginData.password.length<8){
         return toast.error('En az 8 karakter girmelisiniz')
     }
     await login(loginData).then(()=>{
         history.push('/')
         toast.success('Hoşgeldiniz')
      })
         .catch(e=>
          toast.error('Hatalı kullanıcı adı veya şifre'))
     
 } catch (e) {
 }
}


    return (
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center py-4">
                    <a
                      href="index.html"
                      className="logo d-flex align-items-center w-auto"
                    >
                      <img src="assets/img/logo.png" alt="" />
                      <span className="d-none d-lg-block">NiceAdmin</span>
                    </a>
                  </div>
                  {/* End Logo */}
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">
                          Login to Your Account
                        </h5>
                        <p className="text-center small">
                          Enter your username &amp; password to login
                        </p>
                      </div>
                      <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit} >
                        <div className="col-12">
                          <label htmlFor="yourEmail" className="form-label">
                            Email
                          </label>
                          <div className="input-group has-validation">
                            <span
                              className="input-group-text"
                              id="inputGroupPrepend"
                            >
                              
                            </span>
                            <input
                              type="text"
                              name="email"
                              className="form-control"
                              id="yourEmail"
                              value={loginData.email}
                              onChange={handleChange}
                              required
                            />
                            <div className="invalid-feedback">
                              Emailinizi giriniz.
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <label htmlFor="yourPassword" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            name="passwword"
                            className="form-control"
                            id="yourPassword"
                            required
                            value={loginData.password}
                            onChange={handleChange}
                          />
                          <div className="invalid-feedback">
                            Şifrenizi giriniz.
                          </div>
                        </div>
                       
                        <div className="col-12">
                          <button
                            className="btn btn-primary w-100"
                            type="submit"
                          >
                            Giriş Yap
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="credits">
                    {/* All the links in the footer should remain intact. */}
                    {/* You can delete the links only if you purchased the pro version. */}
                    {/* Licensing information: https://bootstrapmade.com/license/ */}
                    {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ */}
                    Designed by{" "}
                    <a href="https://bootstrapmade.com/">BootstrapMade</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    );

}
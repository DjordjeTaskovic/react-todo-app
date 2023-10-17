import { useState } from "react";
import styles from "@/styles/Login.module.css";
import { useAuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const Login = () => {
  const [form, setForm] = useState({
    username:"",
    email:""
  })

  const {login} = useAuthContext();
  const navigate = useNavigate();
  
  const validUser = {
    name:"nikola",
    email:"nikola@gmail.com"
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!form.username) return;
    if(!form.email) return;
    if(form.username !== validUser.name) return;
    if(form.email !== validUser.email) return;

     login(form);
     setForm({});
    navigate('/profile', { replace: true });
  }
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

    return (
     <div>
      <Header>
      <h1>Login</h1>
      </Header>
      <div className={styles.formWrapper}>
        <form className={styles.form}
         onSubmit={handleSubmit}>
          <label htmlFor="">Username</label>
          <input
            type="text"
            name="username"
            placeholder="(nikola)"
            value={form.username}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="">Email</label>

           <input
            type="text"
            name="email"
            placeholder="(nikola@gmail.com)"
            value={form.email}
            onChange={handleChange}
          />
          <button>Login</button>
        </form>
      </div>
    </div>
    )
  };
  export default Login;
  
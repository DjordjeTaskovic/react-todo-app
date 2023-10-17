import { useState } from "react";
import styles from "@/styles/Login.module.css";
import { useAuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const Login = () => {
  const [username,setUsername] = useState('');
  const {login} = useAuthContext();
  const navigate = useNavigate();
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!username) return;
    // console.log(username);
    login(username);
    setUsername('');
    navigate('/', { replace: true });
  }

    return (
     <div>
      <Header>
      <h1>Login</h1>
      </Header>
      <div className={styles.formWrapper}>
        <form className={styles.form}
         onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button>Login</button>
        </form>
      </div>
    </div>
    )
  };
  export default Login;
  
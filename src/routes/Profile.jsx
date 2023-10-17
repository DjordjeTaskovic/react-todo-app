import Header from '@/components/Header';
import { useAuthContext } from '@/context/AuthContext';
import styles from '@/styles/Profile.module.css';

const Profile = () => {
  const { user } = useAuthContext();
  return (
    <div>
      <Header>
      <h1>profile</h1>
      </Header>
      <div className={styles.profile}>
        <p>{user.email}</p>
        <h2>Hello, {user.username}</h2>
      </div>
    </div>
  );
};
export default Profile;

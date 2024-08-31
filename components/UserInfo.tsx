import { useEffect, useState } from "react";
import { UserProps } from "../types/User";
import styles from "./UserInfo.module.css";

interface Props {
  user: UserProps | null;
}

const UserInfo = ({ user }: Props) => {
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!user) {
      setError(true);
      return;
    }
    setError(false);
  }, [user]);

  return (
    <>
      {error ? (
        <h1>Houve erro</h1>
      ) : (
        <div className={styles.userinfo_container}>
          <div className={styles.user_avatar}>
            <img src={user?.avatar_url} alt={user?.login} />
          </div>
          <div className={styles.user_username}>
            <h2>{user?.login}</h2>
          </div>
          <div className={styles.user_details_account}>
            <span>Criada em</span>
            <p>
              {new Date(
                user?.created_at ? user.created_at : Date.now()
              ).toLocaleString("pt-BR")}
            </p>
            <p>{user?.location}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default UserInfo;

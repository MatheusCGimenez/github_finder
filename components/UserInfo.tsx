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
      {user === null ? (
        <h1>Pesquise por algum usuário</h1>
      ) : (
        <div className={styles.userinfo_container}>
          <div className={styles.user_avatar}>
            <a href={user.avatar_url} target="_blank">
              <img src={user?.avatar_url} alt={user?.login} />
            </a>
          </div>
          <div className={styles.user_username}>
            <h2>{user?.login}</h2>
          </div>
          <hr />
          <div className={styles.user_details_account}>
            <div className={styles.account_createdat}>
              <span>Data de criação</span>
              <p>
                {new Date(
                  user?.created_at ? user.created_at : Date.now()
                ).toLocaleString("pt-BR")}
              </p>
            </div>
            <div className={styles.account_location}>
              <span>Local de criação</span>
              <p>{user?.location ? user.location : "Não definido."}</p>
            </div>
          </div>
          <hr />
        </div>
      )}
    </>
  );
};

export default UserInfo;

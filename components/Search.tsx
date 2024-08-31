import { IoSearchSharp } from "react-icons/io5";
import styles from "./Search.module.css";
import { ChangeEvent, FormEvent, SetStateAction, useState } from "react";
import { UserProps } from "../types/User";

interface Props {
  loadUser: (username: string) => Promise<void>;
  setUser: React.Dispatch<SetStateAction<UserProps | null>>;
}

const Search = ({ loadUser }: Props) => {
  const [userName, setUserName] = useState<string>("");

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!userName) {
      console.log("Houve um erro, não veio usuário!");
    }

    loadUser(userName);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  return (
    <div className={styles.form_container}>
      <h2>
        Busque por um usuário no{" "}
        <span>
          <a href="https://github.com/" target="_blank">
            Github
          </a>
        </span>{" "}
        para obter suas informações!
      </h2>
      <hr />
      <form onSubmit={handleOnSubmit}>
        <input
          onChange={handleOnChange}
          type="text"
          required
          placeholder="Pesquisar por usuário"
        />
        <button>
          <IoSearchSharp className={styles.icon} />
        </button>
      </form>
    </div>
  );
};

export default Search;

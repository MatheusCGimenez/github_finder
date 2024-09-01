import { UserProps } from "../types/User";
import Search from "../components/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import UserInfo from "../components/UserInfo";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState<boolean>(false);

  const loadUser = async (username: string): Promise<void> => {
    try {
      const res = await axios.get("https://api.github.com/users/" + username);
      const data = await res.data;
      setUser(data);
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
      <Search loadUser={loadUser} setUser={setUser} error={error} setError={setError} />
      <UserInfo user={user} />
    </div>
  );
};

export default Home;

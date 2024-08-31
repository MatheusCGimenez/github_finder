import { UserProps } from "../types/User";
import Search from "../components/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import UserInfo from "../components/UserInfo";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (username: string): Promise<void> => {
    const res = await axios.get("https://api.github.com/users/" + username);
    const data = await res.data;
    setUser(data);
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
      <Search loadUser={loadUser} setUser={setUser} />
      <UserInfo user={user} />
    </div>
  );
};

export default Home;

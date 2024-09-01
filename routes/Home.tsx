import { UserProps } from "../types/User";
import Search from "../components/Search";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import UserInfo from "../components/UserInfo";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // const loadUser = async (username: string): Promise<void> => {
  //   try {
  //     setLoading(true);
  //     const res = await axios.get("https://api.github.com/users/" + username);
  //     const data = await res.data;
  //     setUser(data);
  //   } catch (error) {
  //     setError(true);
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const loadUser = useCallback(
    async (username: string): Promise<void> => {
      try {
        setLoading(true);
        const res = await axios.get("https://api.github.com/users/" + username);
        const data = await res.data;
        setUser(data);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [user]
  );

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
      <Search
        loadUser={loadUser}
        setUser={setUser}
        error={error}
        setError={setError}
      />
      <UserInfo user={user} loading={loading} />
    </div>
  );
};

export default Home;

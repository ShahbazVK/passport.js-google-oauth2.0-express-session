import axios from "axios";
const App = () => {
  const login = () => {
    window.location.href = "http://localhost:3000/auth/google";
  };
  const logout = () => {
    window.location.href = "http://localhost:3000/auth/google/logout";
  };
  const getData = async () => {
    const resp = await axios.get("http://localhost:3000/auth/success", {
      withCredentials: true,
    });
    console.log(resp);
  };
  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      <button onClick={getData}>get data</button>
    </div>
  );
};

export default App;

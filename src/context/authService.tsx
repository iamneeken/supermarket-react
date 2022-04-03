import axios from "axios";
import { createContext, useState } from "react";

const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const auth = "api/v4/auth";
const loginURL = `${baseURL}/${auth}/login`;

type Token = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  token_type: string;
  user_verified: boolean;
  warehouse_id: number;
  createdAt?: number;
};
//Component haru lai expose garne
type ExposeContext = {
  setToken: Function;
  getToken: Function;
  loggedIn: boolean;
  checkLogIn: Function;
};

const AuthContext = createContext<ExposeContext>({
  setToken: () => {},
  getToken: () => {},
  loggedIn: false,
  checkLogIn: () => {},
});

const { Provider } = AuthContext;

export const AuthProvider = (props: any) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setGetToken] = useState<Token | undefined>(undefined);

  const setToken = (token?: Token) => {
    if (!token) {
      localStorage.clear();
      setLoggedIn(false);
    } else {
      token.createdAt = Date.now();
      localStorage.setItem("token", JSON.stringify(token));
      setLoggedIn(true);
      setGetToken(token);
    }
  };

  const getToken = async () => {
    let token = localStorage.getItem("token");
    if (!token) {
      setToken();
    }
    if (token && hasTokenExpired(JSON.parse(token))) {
      await refreshToken(JSON.parse(token));
    }
  };

  function hasTokenExpired(token: Token) {
    if (token.createdAt) {
      const lifetime = token.expires_in + token.createdAt;
      const currentDate = Date.now();

      return currentDate > lifetime;
    }
    return true;
  }

  function checkLogIn(): boolean {
    let token = getToken();
    if (!token) {
      setLoggedIn(false);
      return false;
    } else {
      setLoggedIn(true);
      return true;
    }
  }
  async function refreshToken(token: Token) {
    try {
      let res = await axios.post(loginURL, {
        client_id: process.env.REACT_APP_client_id,
        client_secret: process.env.REACT_APP_client_secret,
        grant_type: "refresh_token",
        refresh_token: token.refresh_token,
      });
      setToken(res.data);
    } catch (error: any) {
      console.log(error.response);
      setToken();
    }
  }

  const context: ExposeContext = {
    setToken: setToken,
    getToken: getToken,
    loggedIn: loggedIn,
    checkLogIn: checkLogIn,
  };

  return <Provider value={context}> {props.children} </Provider>;
};

export default AuthContext;

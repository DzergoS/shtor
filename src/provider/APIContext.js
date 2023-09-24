import {createContext} from "react";

export const APIContext = createContext({
  lang: '',
  setLang: () => {},
});

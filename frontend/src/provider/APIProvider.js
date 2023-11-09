import { APIContext } from "./APIContext";
import React, {useMemo, useState} from "react";

const APIProvider = (props) => {

  const [lang, setLang] = useState('ua');
  const contextValue = useMemo(
    () => ({ lang, setLang}),
    [lang, setLang]
  );

  console.log('lang', lang);

  return (
    <APIContext.Provider value={contextValue}>
      {props.children}
    </APIContext.Provider>
  );
}

export default APIProvider

"use client";
import {createContext, ReactNode, useState} from "react";

interface Props {
  children: ReactNode;
}
export const TabContext = createContext({
  tab: 'rec',
  setTab: (value: string) => {
  }
});

const TabProvider = ({children}:Props) => {
  const [tab, setTab] = useState('rec');
  return (
    <div>
      <TabContext.Provider value={{tab, setTab}}>
        {children}
      </TabContext.Provider>
    </div>
  );
};

export default TabProvider;
import { createContext, useContext } from "react";
import AuthStore from "./auth";

class RootStore {
  constructor() {
    this.authStore = new AuthStore();
  }
}

const rootStore = new RootStore();
const RootStoreContext = createContext(rootStore);
const RootStoreProvider = ({ children }) => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  );
};
export default RootStoreProvider;

export const useRootStore = () => useContext(RootStoreContext);

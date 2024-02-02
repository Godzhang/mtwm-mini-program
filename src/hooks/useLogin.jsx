import { useRootStore } from "../store";

const useLogin = () => {
  const { authStore } = useRootStore();
  const { isLogin } = authStore;
  return isLogin;
};

export default useLogin;

import { userUser } from "../userStore";

const useUser = () => {
    const user = userUser((state) => state.user);
    const userList = userUser((state) => state.userList);
    const isLoading = userUser((state) => state.isLoading);
    const isError = userUser((state) => state.isError);
    const createUser = userUser((state) => state.createUser);
    const loginUser = userUser((state) => state.loginUser);
    const resetUser = userUser((state) => state.resetUser);
    const setUser = userUser((state) => state.setUser)
  
    return {
      user,
      userList,
      isLoading,
      isError,
      createUser,
      loginUser,
      resetUser,
      setUser
    };
  };
  
  export default useUser;
  

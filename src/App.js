import { useEffect } from "react";
import "./App.css";
import CompanyAddressModal from "./pages/CompanyAddressModal";
import { userService } from "./service/user.service";
import { HttpService } from "./service/base.service";

function App() {
  useEffect(() => {
    const setUserTokenFun = async () => {
      const { access: userToken } = await userService.getUserToken();
      HttpService.setToken(userToken);
    };
    setUserTokenFun();
    return () => {};
  }, []);

  return (
    <div className="App">
      <CompanyAddressModal />
    </div>
  );
}

export default App;

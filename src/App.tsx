import { Toaster } from "react-hot-toast";
import Home from "./Container/Home";

const App = () => {
  return (
    <>
      <Home />
      <Toaster toastOptions={{ position: "top-left" }} />
    </>
  );
};

export default App;

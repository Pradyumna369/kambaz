import { HashRouter,Route,Routes,Navigate } from "react-router";
import Lab1 from "./Labs/Lab1";
import Lab2 from "./Labs/Lab2";
import Labs from "./Labs";
import Kambaz from "./kambaz";
import store from "./kambaz/store";
import { Provider } from "react-redux";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
  <div>
    <Routes>
      <Route path="/" element={<Navigate to="/Kambaz" />} />
      <Route path="Labs" element={<Labs/>}/>
      <Route path="Labs/Lab1" element={<Lab1 />}/>
      <Route path="Labs/Lab2" element={<Lab2 />}/>
      <Route path="/Kambaz/*" element={<Kambaz/>}  />
    </Routes>
  </div>
  </Provider>
  </HashRouter>
  );
}

export default App;
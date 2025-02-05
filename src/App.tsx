import { HashRouter,Route,Routes,Navigate } from "react-router";
import Lab1 from "./Labs/Lab1";
import Lab2 from "./Labs/Lab2";
import Labs from "./Labs";
import Kambaz from "./kambaz";
function App() {
  return (
    <HashRouter>
  <div>
    <Routes>
      <Route path="/" element={<Navigate to="/Labs" />} />
      <Route path="Labs" element={<Labs/>}/>
      <Route path="Labs/Lab1" element={<Lab1 />}/>
      <Route path="Labs/Lab2" element={<Lab2 />}/>
      <Route path="/Kambaz/*" element={<Kambaz/>}  />
    </Routes>
  </div>
  </HashRouter>
  );
}

export default App;
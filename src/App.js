import { Provider } from "react-redux";
import Store from "./store/store";

import Router from "./routes";
// Components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Header />
        <div className="wrapper">
          <Sidebar />
          <main>
            <Router />
          </main>
        </div>
      </div>
    </Provider>
  );
}

export default App;

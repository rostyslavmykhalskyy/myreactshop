import { Provider } from "react-redux";
import Store from "./store/store";

import Router from "./routes";
// Components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  window.onscroll = () => {
    if (document.getElementById("promocode")) {
      let block = document.getElementById("promocode");
      if (window.pageYOffset < 50) {
        block.style.opacity = 1;
      } else {
        block.style.opacity = 0;
      }
    }
  };

  return (
    <Provider store={Store}>
      <div className="App">
        <div className="promocode" id="promocode">
          <p>30% off your first order with code X5c$8</p>
        </div>
        <Header />
        <Sidebar />
        <main>
          <Router />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;

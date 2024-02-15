import ReactDOM from "react-dom/client";
import App from "./app/App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./style/globals.css";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

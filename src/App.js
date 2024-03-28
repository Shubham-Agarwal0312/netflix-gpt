import { Provider } from "react-redux";
import BodyLayout from "./components/Body/BodyLayout";
import appStore from "./utility/store/appStore";

function App() {
  return (
    <div className="">
      <Provider store={appStore}>
        <BodyLayout />
      </Provider>
    </div>
  );
}

export default App;

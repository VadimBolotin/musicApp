import MainPage from "./pages/MainPage/MainPage";
import Playbar from "./components/PlayBar/playBar";
import style from "./global.module.scss";


const App = () => (
  <div className={style.wrapper}>
    <MainPage />
    <Playbar />

  </div>
);  

export default App

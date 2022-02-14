import { GameProvider } from "./context/GameProvider";
import { Map } from "./components/Map";
import { Score } from "./components/Score";
import { Controls } from "./components/Controls";
import styles from "./App.module.css";

const App = () => {
  return (
    <GameProvider>
      <main>
        <div className={styles.scoreWrapper}>
          <Score />
        </div>
        <div className={styles.mapWrapper}>
          <Map />
        </div>
        <div className={styles.controlsWrapper}>
          <Controls />
        </div>
      </main>
    </GameProvider>
  );
};

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import GitHubCard from "./components/GitHubCard";

function App() {
  return (
    <div className="App">
      <h2>Snapshot Testing</h2>
      <div className="col d-flex justify-content-center">
        <GitHubCard />
      </div>
    </div>
  );
}

export default App;

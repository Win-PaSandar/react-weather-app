import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Yangon" />
      </div>
      <footer className="footer">
        <small>
          <a
            href="https://github.com/Win-PaSandar/weatherApp"
            target="_blank"
            className="gitHubLink"
            rel="noreferrer"
          >
            Open-source code
          </a>
          {""} by <span className="coder"> Win-Pa Sandar</span>👩‍💻.
        </small>
      </footer>
    </div>
  );
}

import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Yangon" />
      </div>
      <footer className="footer">
        <p>
          This project was coded by{" "}
          <span className="coder">Win-Pa Sandar 👩‍💻</span> and is {""}
          <a
            href="https://github.com/Win-PaSandar/weatherApp"
            target="_blank"
            className="gitHubLink"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub.
          </a>
        </p>
      </footer>
    </div>
  );
}

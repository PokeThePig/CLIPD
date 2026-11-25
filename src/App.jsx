
import {
  Clapperboard,
  UploadCloud,
  SlidersHorizontal,
  MousePointerClick,
  ListOrdered,
  Lock
} from "lucide-react";

import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Navigation */}
      <header className="navbar">
        <div className="logo">
          <Clapperboard size={28} />
          <span>CLIP<span className="accent">D</span></span>
        </div>

        <a href="#about">About</a>
      </header>

      <main className="main-content">

        {/* Website introduction */}
        <section className="hero">
          <h1>CLIP<span className="accent">D</span></h1>

          <h2>Cinema List Interactive Picking Device</h2>

          <p>
            An unofficial tool for building ranked lists Letterboxd.
          </p>
        </section>

        {/* Letterboxd import */}
        <section className="import-card">
          <UploadCloud size={48} className="accent" />

          <h2>Import your Letterboxd data</h2>

          <p>
            Upload your Letterboxd ZIP export to get started.
          </p>

          <label className="upload-button">
            Choose ZIP File
            <input type="file" accept=".zip" hidden />
          </label>

          <div className="privacy-note">
            <Lock size={14} />
            Your data stays in your browser.
          </div>
        </section>

        {/* How CLIPD works */}
        <section className="features" id="about">

          <div className="feature">
            <SlidersHorizontal size={32} />
            <h3>Filter</h3>
            <p>Customize your movie pool.</p>
          </div>

          <div className="feature">
            <MousePointerClick size={32} />
            <h3>Pick</h3>
            <p>Select your favorite films.</p>
          </div>

          <div className="feature">
            <ListOrdered size={32} />
            <h3>Rank</h3>
            <p>Build your personal rankings.</p>
          </div>

        </section>

      </main>

      {/* Footer */}
      <footer>
        CLIPD · Not affiliated with Letterboxd.
      </footer>

    </div>
  );
}

export default App;

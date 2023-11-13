import logo from './logo.svg';
import styles from './App.module.css';

const App = () => {
  var s = {
    pt : (i) => `padding-top:${i}px; `
  }
  return (
    <div class={styles.App} style={s.pt(0)}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;

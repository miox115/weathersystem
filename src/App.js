import "./css/output.css";
import Header from "./pages/Header";
import Nav from "./pages/Nav";
import Setting from "./pages/Setting";
import State from "./pages/State";
import Log from "./pages/Log";

function App() {
  return (
    <>
      <Header />
      <section class="flex justify-between">
        <Nav />
        <State />
        <Setting />
      </section>
      <Log />
    </>
  );
}

export default App;

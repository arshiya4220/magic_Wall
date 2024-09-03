import Main from "./components/Main";
import Back from "./Assets/back.jpg"
function App() {
  return (
    <div className="">
      <div className="absolute w-full h-full -z-10">
        <img className="fixed h-full w-full" src={Back} />
      </div>
      <div>
      <Main/>
      </div>

    </div>
  );
}

export default App;

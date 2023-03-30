import FirstPage from "./Components/FirstPage/FirstPage";

function App() {
  const moviesArray = { abc: [5,6,7], pqr: [3, 7, 10], xyz: [3, 4, 10] };
  return (
    <div>
      <h2>Tickit Booking System</h2>
      <FirstPage movieArray={moviesArray} />
    </div>
  );
}

export default App;

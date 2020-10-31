import './App.css';
import Header from "./Header";
import CitySelect from "./CitySelect";
import Button from "./Button";
import Table from "./Table";

function App() {
  return (
    <div className="App">
      <Header />
      <CitySelect />
      <Button text="Pharmacies" />
      <Button text="Schools & Colleges" />
      <Button text="Hospitals" />
      <Button text="Doctors" />
      <Table />
    </div>
  );
}

export default App;

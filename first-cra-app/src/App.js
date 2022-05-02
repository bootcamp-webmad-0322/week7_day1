import './App.css'
import Button from './Button';
import StudentCard from './StudentCard';


function App() {
  return (
    <>
      <h1>ESTAMOS READY</h1>
      {/* <Button text="Que comience la fiesta" variant="success" /> */}
      <Button text="No venirse de resaca los lunes pls" variant="warn" />
      <Button variant="warn" />
      <Button text="Holi!" />

      <hr></hr>

      <h1>Fichas de alumnnos</h1>
      <StudentCard />
      <StudentCard />
      <StudentCard />
      <StudentCard />
    </>
  )
}

export default App;
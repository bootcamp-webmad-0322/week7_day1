import './App.css'
import Button from './Button/Button';
import Navbar from './Navbar/Navbar'
import StudentCard from './StudentCard/StudentCard';
import Title from './Title/Title';

import Player from 'react-player'


function App() {
  return (
    <main>
      <Navbar />

      <Title>Listado de alumnos</Title>

      <Button text="Mostrar otras convocatorias" variant="dark" />

      <hr />

      <StudentCard
        name="Gabi Benalcázar"
        bootcamp="Web development"
        info={{ city: 'Madrid', age: 31 }}
        starred
      />

      <StudentCard
        name="Ger Álvarez"
        bootcamp="Cyber"
        info={{ city: 'Madrid', age: 31 }}
      />

      <StudentCard
        name="Francisco Sánchez"
        bootcamp="Web development"
        info={{ city: 'BCN', age: 32 }}
      />

      <StudentCard
        name="Carmen Fraga"
        bootcamp="Web development"
        info={{ city: 'BCN', age: 31 }}
      />

      <Title>Y ahora un vídeo yay</Title>

      <Player
        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
        playing
        controls
        muted
      />



    </main>
  )
}

export default App;

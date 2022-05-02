import Button from '../Button/Button'
import './StudentCard.css'


const StudentCard = ({ name, bootcamp, info, starred }) => {

    const finalClassName = `student-card ${starred ? 'starred-card' : 'ordinary-card'}`

    return (
        <article className={finalClassName}>
            <img src="https://tcab.es/wp-content/uploads/2018/03/woman-tech.jpg" alt={name} />
            <h3>{name}</h3>
            <p>Bootcamp: {bootcamp}</p>
            <hr />
            <p>Edad: {info.age} años | Ciudad: {info.city}</p>
            <Button text="Ver detalles" variant="dark block" />
        </article>
    )
}

export default StudentCard
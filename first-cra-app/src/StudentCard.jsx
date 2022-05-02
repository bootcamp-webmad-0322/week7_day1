import './Student-card.css'

const StudentCard = () => {

    const capitalize = text => text[0].toUpperCase() + text.substring(1)

    return (
        <article className="student-card">
            <h3>{capitalize('ana')}</h3>
        </article>
    )
}

export default StudentCard
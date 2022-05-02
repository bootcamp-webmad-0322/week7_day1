import './Button.css'

const Button = ({ text = 'Sin texto aw :3', variant }) => {

    console.log('SOY UNA FUNCION NO MUERDO SOY TU AMIGA', text)

    return (
        <button
            onClick={() => alert('NO TOQUES TANTO')}
            className={variant}
        >
            {text}
        </button>
    )
}

export default Button
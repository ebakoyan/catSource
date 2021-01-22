import s from "./Animale.module.css"

const Animal = ({imgSrc, display}) => {
    let myStyle = null
    if (!display) {
        myStyle = {
            display: 'none'
        }
    }
    return (
        <div style={myStyle} className={s.animal}>
            <img src={imgSrc} alt=""/>
        </div>
    )
}
export default Animal;
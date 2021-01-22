import Animal from '../Animal/Animal'
import s from "./Liked.module.css"

const Liked = ({liked}) => {
    let list = liked.map(like =><Animal imgSrc = {like} display={true} key={like}/>)
    return <div className={s.liked}>{list}</div>
}
export default Liked
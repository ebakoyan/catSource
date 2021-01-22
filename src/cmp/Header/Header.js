import {Link} from 'react-router-dom'
import s from './Header.module.css'

const Header = () => (
    <div className={s.header}>

        <Link to='/cat/liked' replace className='btn btn-primary'>Liked</Link>
        <Link to='/cat/' replace className='btn btn-primary'>Home</Link>
    </div>

)
export default Header
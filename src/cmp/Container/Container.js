import s from './Container.module.css'

const Container = ({children}) => (
    <div className={s.container} id={'container'}>
        {children}
    </div>
)
export default Container
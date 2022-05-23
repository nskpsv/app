import preloader from './../../assets/spinner.svg';
import style from './preloader.module.css';

const Preloader = (props) => {
    return <div className={style.preloader}>
        <img src={preloader} />
        </div>
};

export default Preloader;
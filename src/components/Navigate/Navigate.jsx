import { NavLink } from 'react-router-dom';
import style from '../../style.module.css';
function Navigate() {
  return (
    <nav className={style.navigate}>
      <NavLink className={style.navLink} to="/">
        Home
      </NavLink>
      <NavLink className={style.navLink} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigate;

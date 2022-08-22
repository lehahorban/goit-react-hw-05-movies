import { NavLink } from 'react-router-dom';
import style from '../../style.module.css';
function Navigate() {
  return (
    <nav>
      <NavLink className={style.navLink} to="/">
        Home
      </NavLink>
      <NavLink className={style.navLink} to="/movies">
        Movies
      </NavLink>
      <NavLink className={style.navLink} to="/movies/:movieId"></NavLink>
    </nav>
  );
}

export default Navigate;

import './NavTab.css';

function NavTab() {
  return (
    <div className="navtab">
      <ul  className="navtab__links">
        <li><a href='#' className="navtab__link">О проекте</a></li>
        <li><a href='#' className="navtab__link">Технологии</a></li>
        <li><a href='#' className="navtab__link">Студент</a></li>
      </ul>
    </div>
  );
}

export default NavTab;

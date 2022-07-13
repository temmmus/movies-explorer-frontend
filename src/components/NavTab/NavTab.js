import './NavTab.css';

function NavTab() {
  return (
    <nav className="navtab">
      <ul className="navtab__links">
        <li><a href='#section-about-project' className="navtab__link">О проекте</a></li>
        <li><a href='#section-techs' className="navtab__link">Технологии</a></li>
        <li><a href='#section-about-me' className="navtab__link">Студент</a></li>
      </ul>
    </nav>
  );
}

export default NavTab;

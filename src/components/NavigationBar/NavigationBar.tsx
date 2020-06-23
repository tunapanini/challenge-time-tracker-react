import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import style from './NavigationBar.module.scss';

function NavigationBar({ pathname }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavLinks = (value = !isOpen) => {
    setIsOpen(value);
  };

  return (
    <nav className={style.wrapper}>
      <div className={style.toggler}>
        <MenuRoundedIcon onClick={() => toggleNavLinks()} />
      </div>
      <div className={`${style.links} ${isOpen ? style.open : ''}`}>
        <NavLinkItem hrefLink="/timesheets" label="Timesheets" active={pathname === '/timesheets'} onClick={() => toggleNavLinks(false)} />
        <NavLinkItem hrefLink="/expenses" label="Expenses" active={pathname === '/expenses'} onClick={() => toggleNavLinks(false)} />
        <NavLinkItem hrefLink="/management" label="Management" active={pathname === '/management'} onClick={() => toggleNavLinks(false)} />
      </div>
      <div className={style.right}>
        <img className={style.alert} src="" alt="" />
        <div className={style.profile}>
          <img className={style.avatar} src="" alt="" />
          <div className={style.info}>
            <p className={style.name}>Adam Fisherman</p>
            <p className={style.level}> Administrator</p>
          </div>
          <button type="button" className={style.arrow}>Open Profile</button>
        </div>
      </div>
    </nav>
  );
}

function NavLinkItem({
  hrefLink, label, active, onClick,
}) {
  return (
    <span className={style.linkItem}>
      <Link to={hrefLink} onClick={onClick}>{label}</Link>
      {active && <span className={style.activeLine} />}
    </span>
  );
}

export default NavigationBar;

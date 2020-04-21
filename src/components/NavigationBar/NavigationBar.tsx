import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavigationBar.module.scss';

function NavigationBar({ pathname }) {
  return (
    <nav className={style.wrapper}>
      <div className={style.links}>
        <NavLinkItem hrefLink="/timesheets" label="Timesheets" active={pathname === '/timesheets'} />
        <NavLinkItem hrefLink="/expenses" label="Expenses" active={pathname === '/expenses'} />
        <NavLinkItem hrefLink="/management" label="Management" active={pathname === '/management'} />
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

function NavLinkItem({ hrefLink, label, active }) {
  return (
    <span className={style.linkItem}>
      <Link to={hrefLink}>{label}</Link>
      {active && <span className={style.activeLine} />}
    </span>
  );
}

export default NavigationBar;

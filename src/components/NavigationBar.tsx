import React, { useState } from 'react';
import style from './NavigationBar.module.scss';

function NavigationBar() {
  const [active, setActive] = useState('Timesheets');

  return (
    <div className={style.wrapper}>
      <div className={style.links}>
        <NavLinkItem hrefLink="#" label="Timesheets" active={active === 'Timesheets'} onClick={() => setActive('Timesheets')} />
        <NavLinkItem hrefLink="#" label="Expenses" active={active === 'Expenses'} onClick={() => setActive('Expenses')} />
        <NavLinkItem hrefLink="#" label="Management" active={active === 'Management'} onClick={() => setActive('Management')} />
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
    </div>
  );
}

function NavLinkItem({
  hrefLink, label, active, onClick,
}) {
  return (
    <span className={style.linkItem}>
      <a href={hrefLink} onClick={onClick}>{label}</a>
      {active && <span className={style.activeLine} />}
    </span>
  );
}

export default NavigationBar;

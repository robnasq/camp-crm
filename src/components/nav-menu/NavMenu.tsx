import {useState} from 'react';
import Hamburger from 'hamburger-react';
import Logo from '../../assets/logo-m-mycamp.png';
import { MenuItem } from './MenuItem';
import { mdiAccountCircleOutline, mdiArrowAll,  mdiCreditCardCheckOutline, mdiExitToApp, mdiTicket } from '@mdi/js';

export const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed flex justify-between items-center bottom-0 px-2 py-2 w-full bg-primary">
      <img src={Logo} className="w-10 h-10" alt="Logo" />
      <Hamburger
        color="#fff"
        toggled={menuOpen}
        toggle={setMenuOpen}
        onToggle={(toggled) => {
          setMenuOpen(toggled);
        }}
      />
      <div className={`absolute bottom-[64px] left-0 right-0 px-10  w-[100%] bg-primary transition-all  duration-300 ${menuOpen ? 'h-[91vh] pt-10 ' : 'h-0 '}`}>
        <div className={`text-white font-bold text-start  ${menuOpen ? 'block' : 'hidden'}` }>
        <MenuItem path={mdiArrowAll} name={'Início reservas'} />
        <MenuItem path={mdiAccountCircleOutline} name={'Início reservas'} />
        <MenuItem path={mdiTicket} name={'Início reservas'} />
        <MenuItem path={mdiCreditCardCheckOutline} name={'Início reservas'} />
        <MenuItem path={mdiExitToApp} name={'Início reservas'} />

        </div>
      </div>
    </div>
  );
};

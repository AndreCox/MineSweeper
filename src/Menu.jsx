import React from 'react';
import Icon from '@mdi/react';
import { mdiCog, mdiCogOff} from '@mdi/js';

function toggleMenu() {
    let menu = document.getElementById("difficulty");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

function Menu() {
  return (
    <div className="absolute top-0 left-0 transition-all">
      <div className="flex flex-col items-center justify-center p-4 hover:rotate-45 transition-all">
          <button onClick={toggleMenu}>
      <Icon path={mdiCog}
        size={1.5}
        horizontal
        vertical
        rotate={90}
        color="#1E293B"/>
        </button>
        </div>
    </div>
  );
}

export default Menu;

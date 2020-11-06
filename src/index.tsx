import React from 'react'
import ReactDOM from 'react-dom'
import { ArmyList } from './components/army-list/index'
import { CombatComponent } from './components/combat-module/index'


ReactDOM.render(
  <div>
    <CombatComponent />
    <ArmyList />
  </div>,
  document.getElementById('root')
);

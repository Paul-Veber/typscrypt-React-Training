import React, { FunctionComponent, useState, useEffect } from "react"
import { Army } from "./types/index"
import { armies } from "./constants/index"

const App: FunctionComponent = () => {
  const [army, setArmy] = useState<Army[]>([])
  useEffect(() => {
    setArmy(armies)
  }, [])

  return (
    <div>
      <ul>
        {army.map(({ name, race, unitList, ArmyGeneralName }) => (
          <div key={name}>
            <li>
              <h2>{name}</h2>
              <div>
                <h3>Description</h3>
                <p>Race: {race}</p>
                <p>Nom du Général: {ArmyGeneralName}</p>
                <ul>
                  {unitList.map(
                    ({
                      name,
                      pointCost,
                      lifePoint,
                      attaquePower,
                      defensePower,
                    }) => (
                      <li key={name}>
                        <div>
                          <h4>{name}</h4>
                          <p>cout en point: {pointCost}</p>
                          <p>PV: {lifePoint}</p>
                          <p>Attaque: {attaquePower}D</p>
                          <p>Defense: {defensePower}D</p>
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default App
import React, { FunctionComponent, useState, useEffect } from "react"
import { Army } from "../../types/index"
import { armies } from "../../constants/armies"

export const ArmyList: FunctionComponent = () => {
  const [army, setArmy] = useState<Army[]>([])
  useEffect(() => {
    setArmy(armies)
  }, [])

  return (
    <div>
      {army.map(({ name, race, unitList, ArmyGeneralName }) => (
        <div key={name}>
          <h2>{name}</h2>
          <div>
            <h3>Description</h3>
            <p>Race: {race}</p>
            <p>Nom du Général: {ArmyGeneralName}</p>

            {unitList.map(
              ({ name, pointCost, lifePoint, attaquePower, defensePower }) => (
                <div key={name}>
                  <h4>{name}</h4>
                  <p>cout en point: {pointCost}</p>
                  <p>PV: {lifePoint}</p>
                  <p>Attaque: {attaquePower}D</p>
                  <p>Defense: {defensePower}D</p>
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  )
}


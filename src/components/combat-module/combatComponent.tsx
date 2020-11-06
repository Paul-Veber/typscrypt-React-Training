import { units } from "../../constants/index"
import { combat } from "./index"
import React, { FunctionComponent, useState } from "react"
import { Unit } from "../../types/units"
import { SpaceMarine, ImperialGuard } from "../../constants/units"

const buttoncheck = (value1: number, value2: number): boolean => {
  if (value1 === -1 || value2 === -1) return true
  else return false
}

export const CombatComponent: FunctionComponent = () => {
  const unitsArray = units
  const [attackerValue, setAttackerValue] = useState<number>(-1)
  const [selectedAttacker, setSelectedAttacker] = useState<Unit>(units[0])
  const [defenderValue, setDefenderValue] = useState<number>(-1)
  const [selectedDefender, setSelectedDefender] = useState<Unit>(units[0])
  const [buttonActivation, setActivation] = useState<boolean>(true)
  const [combatResult, setResult] = useState<string[]>(["test"])

  return (
    <div>
      <h2>Combat Mortel !</h2>
      <div>
        <div>
          <h3>Attaquant</h3>
          <select
            onChange={(e) => {
              setActivation(
                buttoncheck(parseInt(e.target.value), defenderValue)
              )
              setAttackerValue(parseInt(e.target.value))
              setSelectedAttacker(units[parseInt(e.target.value)])
              console.log(buttonActivation, `attacker${attackerValue}`)
            }}
            name="atackerSelect"
            id="atackerSelect"
          >
            <option value={-1}>choisissez une unité</option>
            {unitsArray.map(({ name }, index) => (
              <option key={index} value={index}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h3>Défenseur</h3>
          <select
            onChange={(e) => {
              setActivation(
                buttoncheck(parseInt(e.target.value), attackerValue)
              )
              setDefenderValue(parseInt(e.target.value))
              setSelectedDefender(units[parseInt(e.target.value)])
              console.log(buttonActivation, `defender${defenderValue}`)
            }}
            name="defenderSelect"
            id="defenderSelect"
          >
            <option value={-1}>choisissez une unité</option>
            {unitsArray.map(({ name }, index) => (
              <option key={index} value={index}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            disabled={buttonActivation}
            onClick={() => {
              setResult(
                combat(
                  selectedAttacker.name,
                  selectedAttacker.attaquePower,
                  selectedAttacker.defensePower,
                  selectedAttacker.lifePoint,
                  selectedDefender.name,
                  selectedDefender.attaquePower,
                  selectedDefender.defensePower,
                  selectedDefender.lifePoint
                )
              )
              console.log(
                combat(
                  SpaceMarine.name,
                  SpaceMarine.attaquePower,
                  SpaceMarine.defensePower,
                  SpaceMarine.lifePoint,
                  ImperialGuard.name,
                  ImperialGuard.attaquePower,
                  ImperialGuard.defensePower,
                  ImperialGuard.lifePoint
                ),
                console.log(selectedAttacker.name, selectedDefender.attaquePower)
              )
            }}
          >
            Fight !
          </button>
          <div>
            {combatResult.map((round, index) => (
              <p key={index}>{round}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

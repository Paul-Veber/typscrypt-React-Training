import { Unit } from "../../types/index"
import { diceRoll } from "../../utils/index"

const roundResult = (
  attackPower: Unit["attaquePower"],
  defensePower: Unit["defensePower"]
): string => {
  const attackRoll = diceRoll(6) + attackPower
  const defenseRoll = diceRoll(6) + defensePower

  if (attackRoll > defenseRoll) return "win"
  if (attackRoll === defenseRoll) return "draw"
  else return "defend"
}

const damage = (roundResult: string): number => {
  if (roundResult === "win") return 1
  else return 0
}

const action = (
  attackerName: Unit["name"],
  defenderName: Unit["name"],
  roundResult: string
): string => {
  if (roundResult === "win") {
    return `${attackerName} blesse ${defenderName}`
  }
  if (roundResult === "draw") {
    return `la passe d'arme se finit sur une égalité`
  } else return `${defenderName} se protége`
}

export const combat = (
  unit1Name: Unit["name"],
  unit1AttackPower: Unit["attaquePower"],
  unit1DefensePower: Unit["defensePower"],
  unit1Pv: Unit["lifePoint"],
  unit2Name: Unit["name"],
  unit2AttackPower: Unit["attaquePower"],
  unit2DefensePower: Unit["defensePower"],
  unit2Pv: Unit["lifePoint"]
): string[] => {
  let actions: string[] = []
  let PvUnit1 = unit1Pv
  let PvUnit2 = unit2Pv

  const fullRound = (
    AttackerName: Unit["name"],
    AttackerPower: Unit["attaquePower"],
    DefenderName: Unit["name"],
    DefenderPower: Unit["defensePower"],
    DefenderPv: Unit["lifePoint"]
  ): string[] => {
    const attack = roundResult(AttackerPower, DefenderPower)
    const attackDamage = damage(attack)

    if(unit1Name === AttackerName) {
      PvUnit2 =- attackDamage
    } else PvUnit1 =- attackDamage

    const attackMessage = action(unit1Name, unit2Name, attack)
    if (DefenderPv === 0) {
      const victory = `${DefenderName} est tué et ${AttackerName} gagne le combat`
      return [attackMessage, victory]
    }
    return [attackMessage]
  }
  while (PvUnit1 === 0 || PvUnit2 === 0) {

    const action1 = fullRound(unit1Name, unit1AttackPower, unit2Name, unit2DefensePower, PvUnit2)
    actions = actions.concat(action1)

    if (PvUnit1 === 0 || PvUnit2 === 0) return actions

    const action2 = fullRound(unit2Name, unit2AttackPower, unit1Name, unit1DefensePower, PvUnit1)
    actions = actions.concat(action2)
  }
  return actions
}

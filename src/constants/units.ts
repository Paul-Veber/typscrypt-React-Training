import {
  ImperialUnit,
  Attack,
  Defense,
  TauUnit,
  EldarUnit,
  TzeentchUnit,
  Unit,
} from "../types/index"
// Imperium

export const ImperialGuard: ImperialUnit = {
  name: "imperialGuard",
  army: "Imperium",
  pointCost: 5,
  lifePoint: 1,
  attaquePower: Attack.Weak,
  defensePower: Defense.Intermediate,
}

export const SpaceMarine: ImperialUnit = {
  name: "Space Marine",
  army: "Imperium",
  pointCost: 15,
  lifePoint: 1,
  attaquePower: Attack.Strong,
  defensePower: Defense.Hard,
}

// Tau

export const FireWarrior: TauUnit = {
  name: "Fire Warrior",
  army: "Tau",
  pointCost: 9,
  lifePoint: 1,
  attaquePower: Attack.Medium,
  defensePower: Defense.Soft,
}

export const Drone: TauUnit = {
  name: "Drone",
  army: "Tau",
  pointCost: 9,
  lifePoint: 1,
  attaquePower: Attack.Feeble,
  defensePower: Defense.Soft,
}

// Eldar

export const Guardian: EldarUnit = {
  name: "Guardian",
  army: "Eldar",
  pointCost: 10,
  lifePoint: 10,
  attaquePower: Attack.Medium,
  defensePower: Defense.Soft,
}

export const Aspect: EldarUnit = {
  name: "Aspect",
  army: "Eldar",
  pointCost: 12,
  lifePoint: 2,
  attaquePower: Attack.Strong,
  defensePower: Defense.Soft,
}

// Tzeentch

export const BlueHorror: TzeentchUnit = {
  name: "BlueHorror",
  army: "Tzeentch",
  pointCost: 10,
  lifePoint: 1,
  attaquePower: Attack.Strong,
  defensePower: Defense.Soft,
}

export const units: Unit[] = [
  SpaceMarine,
  ImperialGuard,
  FireWarrior,
  Drone,
  Guardian,
  Aspect,
  BlueHorror,
]

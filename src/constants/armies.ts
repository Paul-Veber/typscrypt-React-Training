import {ImperialArmy, TauArmy, EldarArmy, TzeentchArmy, Army} from "../types/index"
import {SpaceMarine, ImperialGuard, FireWarrior, Drone, Guardian, Aspect, BlueHorror} from "./units"

export const Imperium: ImperialArmy = {
  name: "Imperium",
  race: "Human",
  unitList: [SpaceMarine, ImperialGuard],
  ArmyGeneralName: "Comissar Fucklaw"
}
export const Tau: TauArmy = {
  name: "Tau",
  race: "Xenos",
  unitList: [FireWarrior, Drone],
  ArmyGeneralName: "Closesight"
}
export const Eldar: EldarArmy = {
  name: "Eldar",
  race: "Xenos",
  unitList:[Guardian, Aspect],
  ArmyGeneralName: "Bhyg T'ythigehf"
}
export const Tzeentch: TzeentchArmy = {
  name: "Tzeentch",
  race: "Demon",
  unitList:[BlueHorror],
  ArmyGeneralName: "EdgeLord Doombringer"
}

export const armies: Army[] = [Imperium, Tau, Eldar, Tzeentch]


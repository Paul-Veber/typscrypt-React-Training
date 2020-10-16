import {ArmyName, ImperialUnit, TauUnit, EldarUnit, TzeentchUnit, Unit} from "./index"

type Race = "Human" | "Xenos" | "Demon"

export interface Army {
  name: ArmyName
  race: Race
  unitList: Array<Unit>
  ArmyGeneralName: string
}

export interface ImperialArmy extends Army {
  unitList: ImperialUnit[]
}

export interface TauArmy extends Army {
  unitList: TauUnit[]
}

export interface EldarArmy extends Army {
  unitList: EldarUnit[]
}

export interface TzeentchArmy extends Army {
  unitList: TzeentchUnit[]
}
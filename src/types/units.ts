export type ArmyName = "Imperium" | "Tau" | "Eldar" | "Tzeentch"

export enum Attack {
  Feeble = 1,
  Weak = 2,
  Medium = 4,
  Strong = 6
}

export enum Defense {
  Soft = 1,
  Intermediate = 2,
  Hard = 4
}

 export interface Unit {
  name: string
  army : ArmyName
  pointCost: number
  lifePoint: number
  attaquePower: Attack
  defensePower: Defense
}

export interface ImperialUnit extends Unit {
  army: "Imperium"
}

export interface TauUnit extends Unit {
  army: "Tau"
}

export interface EldarUnit extends Unit {
  army: "Eldar"
}

export interface TzeentchUnit extends Unit {
  army: "Tzeentch"
}

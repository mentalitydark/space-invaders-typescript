export interface IHealth {
  max: number
  current: number
  heal: (amount: number) => void
  takeDamage: (amount: number) => void
  isAlive: boolean
}
import { Obstacle } from "./motionSlice"

export const arrayOfSize = (n: number) => {
  return Array.from(Array(n).keys())
}

export const obstacleExists = (obstacles: Obstacle[], obstacle: Obstacle) => {
  obstacles.forEach((obs) => {
    if ((obs.x === obstacle.y) && (obs.y === obstacle.y)) {
      return true;
    }
  })
  return false;
}
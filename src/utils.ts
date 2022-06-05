import { Obstacle } from "./motionSlice"

export const arrayOfSize = (n: number) => {
  return Array.from(Array(n).keys())
}

export const obstacleExists = (obstacles: Obstacle[], obstacle: Obstacle) => {
  for(let i = 0; i < obstacles.length; i++) {
    if ((obstacles[i].x === obstacle.x) && (obstacles[i].y === obstacle.y)) {
      return true;
    }
  }
  return false;
}
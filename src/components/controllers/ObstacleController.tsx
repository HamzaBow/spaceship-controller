import React from 'react'
import { useDispatch } from 'react-redux'
import { putObstacles } from '../../motionSlice';

const ObstacleController = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(putObstacles())
  }
  return (
      <button onClick={handleClick}>Random Obstacles</button>
  )
}

export default ObstacleController
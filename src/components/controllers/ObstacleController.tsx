import React from 'react'
import { useDispatch } from 'react-redux'
import { putObstacles } from '../../motionSlice';

const ObstacleController = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(putObstacles())
  }
  return (
      <button onClick={handleClick}>Generate Random Obstacles</button>
  )
}

export default ObstacleController
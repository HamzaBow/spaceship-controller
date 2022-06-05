import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

const ObstacleReport = () => {
  const ObstacleEncounterLogs = useSelector((state: RootState) => state.motion.ObstacleEncounterLogs)
  return (
    <>
    <h3>Obstacle Encouter Logs</h3>
    { ObstacleEncounterLogs.map((str) => <pre>{str}</pre>)
    }
    </>
  )
}

export default ObstacleReport
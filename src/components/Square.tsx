import { CSSProperties } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Direction, Obstacle } from "../motionSlice";

interface Props {
  xLocation: number;
  yLocation: number;
}
const Square: React.FC<Props> = ({ xLocation, yLocation}) => {

  const [x, y, direction, obstacles] = useSelector((state: RootState) => [
    state.motion.x,
    state.motion.y,
    state.motion.direction,
    state.motion.obstacles,
  ]);

  const edgeSize = "50px";
  const squareStyle: CSSProperties = {
    width: edgeSize,
    height: edgeSize,
    backgroundColor: "gray",
    marginLeft: "3px",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
  }
  const spaceshipStyle: CSSProperties = {
    width: "0",
    height: "0",
    borderStyle: "solid",
    borderWidth: "20px",

    marginTop     : direction === Direction.North ? "0" : "30px",
    marginBottom  : direction === Direction.South ? "0" : "30px",
    marginLeft    : direction === Direction.West ? "0" : "30px",
    marginRight   : direction === Direction.East ? "0" : "30px",

    borderTopColor    : direction === Direction.South ? "white" : "rgba(0, 0, 0, 0)",
    borderBottomColor : direction === Direction.North ? "white" : "rgba(0, 0, 0, 0)",
    borderLeftColor   : direction === Direction.East  ? "white" : "rgba(0, 0, 0, 0)",
    borderRightColor  : direction === Direction.West  ? "white" : "rgba(0, 0, 0, 0)",
    position: "absolute"
  }

  const squareIsObtacle = () => {
    for (let i = 0; i < (obstacles as Obstacle[]).length; i++) {
      let obs = (obstacles as Obstacle[])[i]
      if ((obs.x === xLocation) && (obs.y === yLocation)) {
        return true
      }
    }
    return false;
  }

  return (
    <div style={squareStyle}>
      { (x === xLocation && y === yLocation) &&
         <div style={spaceshipStyle}></div>
      }
      { squareIsObtacle() &&
        <div>obs</div>
      }
    </div>
  )
}

export default Square
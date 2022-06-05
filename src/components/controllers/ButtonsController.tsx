import { CSSProperties } from "react";
import { useDispatch } from "react-redux";
import {
  moveForward,
  moveBackward,
  rotateLeft,
  rotateRight,
} from "../../motionSlice";

const ButtonsController = () => {
  const dispatch = useDispatch();
  const containerStyle: CSSProperties = {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    gridTemplateColumns: "1fr 1fr 1fr",
  };
  return (
    <div>
      <p> Or the buttons bellow. </p>
      <div style={containerStyle}>
        <button style={{ gridArea: "1/2/2/3", paddingTop: "5px", paddingBottom: "5px", margin: "2px" }} onClick={() => dispatch(moveForward())}>Forward</button>
        <button style={{ gridArea: "2/2/3/3", paddingTop: "5px", paddingBottom: "5px", margin: "2px" }} onClick={() => dispatch(moveBackward())}>Backward</button>
        <button style={{ gridArea: "2/1/3/2", paddingTop: "5px", paddingBottom: "5px", margin: "2px" }} onClick={() => dispatch(rotateLeft())}>Rotate left</button>
        <button style={{ gridArea: "2/3/3/4", paddingTop: "5px", paddingBottom: "5px", margin: "2px" }} onClick={() => dispatch(rotateRight())}>Rotate right</button>
      </div>
    </div>
  )
}

export default ButtonsController
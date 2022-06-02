import { useDispatch } from "react-redux";
import {
  moveForward,
  moveBackward,
  rotateLeft,
  rotateRight,
} from "../../motionSlice";

const ButtonsController = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(moveForward())}>Forward</button>
      <button onClick={() => dispatch(moveBackward())}>Backward</button>
      <button onClick={() => dispatch(rotateLeft())}>Rotate left</button>
      <button onClick={() => dispatch(rotateRight())}>Rotate right</button>
    </>
  )
}

export default ButtonsController
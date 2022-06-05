import { CSSProperties, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  moveForward,
  moveBackward,
  rotateLeft,
  rotateRight,
} from "../../motionSlice";


const KeyboardController = () => {
useEffect(() => {

  const handleKeyboardevent = (event: KeyboardEvent) => {
    switch (event.key) {
      case "ArrowUp":
        case "f":
        event.preventDefault();
        dispatch(moveForward());
        break;
      case "ArrowDown":
      case "b":
        event.preventDefault();
        dispatch(moveBackward());
        break;
      case "ArrowLeft":
      case "l":
        event.preventDefault();
        dispatch(rotateLeft());
        break;
      case "ArrowRight":
      case "r":
        event.preventDefault();
        dispatch(rotateRight());
        break;
      default:
        break;
    }
  }
  document.addEventListener('keydown', handleKeyboardevent)

  return () => document.removeEventListener('keydown', handleKeyboardevent)
})
  const dispatch = useDispatch();
  return (
    <div className="kbd-info">
      <span>Use keyboard keys </span>
      <div className="kbd-container">
        <kbd style={{ gridArea: "1/2/2/3" }}>↑</kbd>
        <kbd style={{ gridArea: "2/2/3/3" }}>↓</kbd>
        <kbd style={{ gridArea: "2/1/3/2" }}>←</kbd>
        <kbd style={{ gridArea: "2/3/3/4" }}>→</kbd>
      </div>
      <span> to controll the spaceship around</span>
    </div>
  );
};

export default KeyboardController;

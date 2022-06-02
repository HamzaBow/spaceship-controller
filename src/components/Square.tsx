import { CSSProperties } from "react";

interface Props {
  xLocation: number;
  yLocation: number;
}
const Square: React.FC<Props> = ({ xLocation, yLocation}) => {
  const edgeSize = "50px";
  const squareStyle: CSSProperties = {
    width: edgeSize,
    height: edgeSize,
    backgroundColor: "gray",
    margin: "1px",
    display: "inline-block",
  }
  return (
    <div style={squareStyle}>
       {xLocation + ", " + yLocation}
    </div>
  )
}

export default Square
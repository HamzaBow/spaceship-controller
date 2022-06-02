import React from "react";
import { arrayOfSize } from "../utils";
import GridRow from "./GridRow";
interface Props {
  width: number;
  height: number;
}

const Grid:React.FC<Props> = ({ width, height}) => {
  return (
    <>
      {arrayOfSize(height).map((_: number, i: number) => (
        <GridRow width={width} />
      ))}
    </>
  );
}

export default Grid
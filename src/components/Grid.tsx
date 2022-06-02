import React from "react";
import { useSelector } from "react-redux";
import { arrayOfSize } from "../utils";
import GridRow from "./GridRow";

const Grid:React.FC<{}> = () => {
  const gridHeight = useSelector((state: any) => state.motion.gridHeight)
  return (
    <>
      {arrayOfSize(gridHeight).map((_: number, index: number) => (
        <GridRow rowNumber={gridHeight - (index + 1)}/>
      ))}
    </>
  );
}

export default Grid
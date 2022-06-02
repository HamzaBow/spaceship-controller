import React from 'react'
import Square from './Square';
import { arrayOfSize } from "../utils";
import { useSelector } from 'react-redux';

interface Props {
  rowNumber: number;
}
const GridRow: React.FC<Props> = ({ rowNumber }) => {
  const rowWidth = useSelector((state: any) => state.motion.gridWidth)
      return (
        <div>
          {arrayOfSize(rowWidth).map((_: number, index: number) => (
            <Square xLocation={rowNumber} yLocation={index} />
          ))}
        </div>
      );
  }

export default GridRow
import React from 'react'
import Square from './Square';
import { arrayOfSize } from "../utils";
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

interface Props {
  rowNumber: number;
}
const GridRow: React.FC<Props> = ({ rowNumber }) => {
  const rowWidth = useSelector((state: RootState) => state.motion.gridWidth)
      return (
        <div>
          {arrayOfSize(rowWidth).map((_: number, index: number) => (
            <Square xLocation={index} yLocation={rowNumber} />
          ))}
        </div>
      );
  }

export default GridRow
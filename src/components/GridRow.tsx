import React from 'react'
import Square from './Square';
import { arrayOfSize } from "../utils";

interface Props {
  width: number;
}
const GridRow: React.FC<Props> = ({ width }) => {
      return (
        <div>
          {arrayOfSize(width).map((__: number, j: number) => (
            <Square />
          ))}
        </div>
      );
  }

export default GridRow
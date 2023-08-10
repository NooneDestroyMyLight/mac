import { FC, useMemo, useState, useEffect, useCallback } from "react";
import style from "./SizeDropdown.module.scss";
import { TSizeRange } from "../../../../../types/productI.interface";

interface ISizeDropdown {
  totalWeight: number;
  sizeRange: TSizeRange[];
}

const SizeDropdown: FC<ISizeDropdown> = ({ totalWeight, sizeRange }) => {
  const [sizeRangeArr, setSizeRangeArr] = useState<TSizeRange[]>(sizeRange);

  const [currentSize, setCurrentSize] = useState<number>(0);

  const handlerChooseSize = useCallback(
    (arg: number) => {
      if (arg < 0) {
        setCurrentSize(0);
      } else if (arg >= sizeRange.length - 1) {
        setCurrentSize(sizeRange.length - 1);
      } else {
        setCurrentSize(arg);
      }
    },
    [sizeRangeArr]
  );

  useEffect(() => {
    setSizeRangeArr([...sizeRangeArr].sort((a, b) => a.price - b.price));
  }, [sizeRange]);

  return (
    <div onClick={e => e.stopPropagation()} className={style.weightAndDropdown}>
      <button
        onClick={() => {
          handlerChooseSize(currentSize + 1);
        }}
        className={style.increase}
      ></button>
      <span> {`${sizeRangeArr[currentSize].size}L`} </span>
      <button
        onClick={() => {
          handlerChooseSize(currentSize - 1);
        }}
        className={style.reduce}
      ></button>
    </div>
  );
};
export default SizeDropdown;

import { FC, useMemo, useState, useCallback, useEffect } from "react";
import style from "./ChooseDrinksSize.module.scss";
import { TSizeRange } from "../../../../../types/productI.interface";

interface ISizeDropdown {
  sizeRange: TSizeRange[];
  setCurrentDrinksSize: React.Dispatch<React.SetStateAction<TSizeRange>>;
}

const ChooseDrinksSize: FC<ISizeDropdown> = ({
  sizeRange,
  setCurrentDrinksSize,
}) => {
  const [sizeRangeArr, setSizeRangeArr] = useState<TSizeRange[]>(sizeRange);
  const [currentSize, setCurrentSize] = useState<number>(0);

  const handlerChooseSize = useCallback(
    (arg: number) => {
      if (arg < 0) {
        setCurrentSize(0);
        setCurrentDrinksSize({
          size: sizeRangeArr[0].size,
          price: sizeRangeArr[0].price,
        });
      } else if (arg >= sizeRange.length - 1) {
        setCurrentSize(sizeRange.length - 1);
        setCurrentDrinksSize({
          size: sizeRangeArr[sizeRange.length - 1].size,
          price: sizeRangeArr[sizeRange.length - 1].price,
        });
      } else {
        setCurrentSize(arg);
        setCurrentDrinksSize({
          size: sizeRangeArr[arg].size,
          price: sizeRangeArr[arg].price,
        });
      }
    },
    [sizeRangeArr]
  );

  useMemo(() => {
    setSizeRangeArr([...sizeRangeArr].sort((a, b) => a.price - b.price));
  }, [sizeRange]);

  useEffect(() => {
    setCurrentDrinksSize({
      size: sizeRangeArr[currentSize].size,
      price: sizeRangeArr[currentSize].price,
    });
  }, []);

  return (
    <>
      {sizeRangeArr[currentSize].price}₴
      <div
        onClick={e => e.stopPropagation()}
        className={style.weightAndDropdown}
      >
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
    </>
  );
};
export default ChooseDrinksSize;

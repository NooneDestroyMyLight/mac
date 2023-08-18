import { FC, useMemo, useState, useCallback, useEffect } from "react";
import style from "./ChooseSize.module.scss";
import { TSizeRange } from "../../../../../types/productI.interface";

interface ISizeDropdown {
  sizeRange: TSizeRange[];
  setproductCurrentSize: React.Dispatch<React.SetStateAction<TSizeRange>>;
}

const ChooseSize: FC<ISizeDropdown> = ({
  sizeRange,
  setproductCurrentSize,
}) => {
  const [sizeRangeArr, setSizeRangeArr] = useState<TSizeRange[]>(sizeRange);
  const [currentSizeNumber, setCurrentSizeNumber] = useState<number>(0);

  const handlerChooseSize = useCallback(
    (arg: number) => {
      if (arg < 0) {
        setCurrentSizeNumber(0);
        setproductCurrentSize({
          size: sizeRangeArr[0].size,
          price: sizeRangeArr[0].price,
        });
      } else if (arg >= sizeRange.length - 1) {
        setCurrentSizeNumber(sizeRange.length - 1);
        setproductCurrentSize({
          size: sizeRangeArr[sizeRange.length - 1].size,
          price: sizeRangeArr[sizeRange.length - 1].price,
        });
      } else {
        setCurrentSizeNumber(arg);
        setproductCurrentSize({
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
    setproductCurrentSize({
      size: sizeRangeArr[currentSizeNumber].size,
      price: sizeRangeArr[currentSizeNumber].price,
    });
  }, []);

  return (
    <>
      {sizeRangeArr[currentSizeNumber].price}₴
      <div
        onClick={e => e.stopPropagation()}
        className={style.weightAndDropdown}
      >
        <button
          onClick={() => {
            handlerChooseSize(currentSizeNumber + 1);
          }}
          className={style.increase}
        ></button>
        <span> {`${sizeRangeArr[currentSizeNumber].size}L`} </span>
        <button
          onClick={() => {
            handlerChooseSize(currentSizeNumber - 1);
          }}
          className={style.reduce}
        ></button>
      </div>
    </>
  );
};
export default ChooseSize;

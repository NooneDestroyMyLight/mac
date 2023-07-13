import { FC } from "react";
import style from "./itemDiscription.module.scss";

const itemDiscription: FC = ({}) => {
  return (
    <div className={style.description}>
      <ul>
        <li>Calories</li>
        <li>{calories} Cal</li>
      </ul>
      <ul>
        <li>Total Weight</li>
        <li>{totalWeight}g</li>
      </ul>
      <ul>
        <li className={style.sabDescription}>Total Fat</li>
        <li>{totalFat}g</li>
      </ul>
      <ul>
        <li className={style.sabDescription}>Total Carbs</li>
        <li>{totalCarbs}g</li>
      </ul>
      <ul>
        <li className={style.sabDescription}>Protein</li>
        <li>{protein}g</li>
      </ul>
    </div>
  );
};
export default itemDiscription;

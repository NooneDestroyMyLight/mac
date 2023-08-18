import { FC, useState } from "react";
import style from "./AnotherPersonInfo.module.scss";

import ModelWindow from "../../../../HOC/modelWindow/ModelWindow";
import { SubmitHandler, useForm } from "react-hook-form";

interface IAnotherPersonInfo {}

interface IDifferentPerson {
  name: string;
  phone: string;
}

const AnotherPersonInfo: FC<IAnotherPersonInfo> = ({}) => {
  const [isModelWindowOpen, setModelWindowOpen] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDifferentPerson>();
  const onSubmit: SubmitHandler<IDifferentPerson> = data => console.log(data);

  return (
    <>
      <li>
        <label>Sending to another person?</label>
        <input
          value="Add recipient details to help the courier"
          type="text"
          readOnly
          className={style.deliveryButton}
          onClick={() => {
            setModelWindowOpen(true);
            console.log(isModelWindowOpen);
          }}
        />
      </li>
      <ModelWindow
        isModelWindowOpen={isModelWindowOpen}
        setModelWindowOpen={setModelWindowOpen}
      >
        <div className={style.container}>
          <ul>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1>Add recipient</h1>
              <li className={style.inputColumn}>
                <label className={style.uperInputText}>Full name</label>
                <input
                  type="text"
                  {...register("name", { required: true, minLength: 20 })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name?.type === "required" && (
                  <p role="alert">First name is required</p>
                )}
              </li>
              <li className={style.inputColumn}>
                <label className={style.uperInputText}>number</label>
                <input type="tel" {...register("phone")} />
              </li>
              <button type="submit">Save</button>
            </form>
          </ul>
        </div>
      </ModelWindow>
    </>
  );
};
export default AnotherPersonInfo;

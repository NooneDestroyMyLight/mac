"use client";
import { FC, useState } from "react";
import style from "./UserInfoSection.module.scss";

interface IState {
  showPassword: boolean;
  switchField: boolean;
}

const UserInfoSection: FC = () => {
  const [stateObj, setStateObj] = useState<IState>({
    showPassword: false,
    switchField: false,
  });

  return (
    <section className={style.section}>
      <div className={style.sectionContainer}>
        <div className={style.sectionTitle}>
          <div className={style.sectionNumber}>1</div>Your contact information
        </div>
        <div className={style.userInfoButton}>
          <button
            onClick={() => setStateObj({ ...stateObj, switchField: false })}
          >
            I'am a new customer
          </button>
          <button
            onClick={() => setStateObj({ ...stateObj, switchField: true })}
          >
            I'am a loyal customer
          </button>
        </div>
        <div className={style.userInputContainer}>
          {stateObj.switchField ? (
            <div className={style.userAuth}>
              <ul className={style.authInputs}>
                <li className={style.inputColumn}>
                  <span className={style.uperInputText}>Email</span>
                  <input type="text" />
                </li>
                <li className={style.password}>
                  <div className={style.passwordInput}>
                    <li className={style.inputColumn}>
                      <span className={style.uperInputText}>Password</span>
                      <input
                        type={stateObj.showPassword ? "text" : "password"}
                      />
                    </li>
                    <div
                      className={style.hidePassword}
                      onClick={() =>
                        setStateObj({
                          ...stateObj,
                          showPassword: !stateObj.showPassword,
                        })
                      }
                    >
                      {stateObj.showPassword ? (
                        <img
                          src="/images/hidePassword.png"
                          alt="hidePassword"
                        />
                      ) : (
                        <img
                          src="/images/showPassword.png"
                          alt="showPassword"
                        />
                      )}
                    </div>
                  </div>
                </li>
                <div>
                  <input type="checkbox" /> noticed password
                </div>
                <button>Login</button>
              </ul>
              <ul className={style.authByService}>
                <li className={style.uperInputText}>Login by Google</li>
                <li className={style.loginGoogle}>
                  <div className={style.googleIconContainer}>
                    <img src="/images/googleIcon.png" alt="google icon" />
                  </div>
                  Google
                </li>
              </ul>
            </div>
          ) : (
            <ul className={style.userInfoInputs}>
              <li className={style.inputColumn}>
                <span className={style.uperInputText}>Name</span>
                <input type="text" />
              </li>
              <li className={style.inputColumn}>
                <span className={style.uperInputText}>Last name</span>
                <input type="text" />
              </li>
              <li className={style.inputColumn}>
                <span className={style.uperInputText}>Phone number</span>
                <input type="text" />
              </li>
              <li className={style.inputColumn}>
                <span className={style.uperInputText}>Email</span>
                <input type="text" />
              </li>
              <button className={style.saveButton}>Save</button>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};
export default UserInfoSection;

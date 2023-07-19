"use client";
import { FC } from "react";
import style from "./UserInfoSection.module.scss";

import { useState } from "react";

const UserInfoSection: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [switchField, setField] = useState<boolean>(false);

  return (
    <section className={style.userInfoSection}>
      <div className={style.userInfoContainer}>
        <div className={style.userInfoTitle}>
          <div className={style.sectionNumber}>1</div>Your contact information
        </div>
        <div className={style.userInfoButton}>
          <button onClick={() => setField(false)}>I'am a new customer</button>
          <button onClick={() => setField(true)}>I'am a loyal customer</button>
        </div>
        <div className={style.userInputContainer}>
          {switchField ? (
            <ul className={style.userAuth}>
              <ul className={style.authInputs}>
                <li className={style.loginInput}>
                  <span className={style.uperInputText}>Email</span>
                  <input type="text" />
                </li>
                <li className={style.password}>
                  <span className={style.uperInputText}>Password</span>
                  <div className={style.passwordInput}>
                    <input type={showPassword ? "text" : "password"} />
                    <div
                      className={style.hidePassword}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
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
            </ul>
          ) : (
            <ul className={style.userInfoInputs}>
              <li>
                <span className={style.uperInputText}>Middle name</span>
                <input type="text" />
              </li>
              <li>
                <span className={style.uperInputText}>Name</span>
                <input type="text" />
              </li>
              <li>
                <span className={style.uperInputText}>Phone number</span>
                <input type="text" />
              </li>
              <li>
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

import React, { ReactElement } from "react";
import styles from "@/styles/Auth.module.scss";

const AuthLayout = ({ children }: {children: ReactElement}) => {
  return (
    <div className={styles.container}>
      <div className={styles.circle} id={styles.circle_1}></div>
      <div className={styles.circle} id={styles.circle_2}></div>
      {children}
    </div>
  );
};

export default AuthLayout;

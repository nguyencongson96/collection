import React, { ReactElement } from "react";
import styles from "@/styles/auth/Auth.module.scss";

const AuthLayout = ({ children }: { children: ReactElement }) => {
  return <div className={styles.container}>{children}</div>;
};

export default AuthLayout;

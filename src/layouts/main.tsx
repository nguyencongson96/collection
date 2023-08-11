import React, { useEffect } from "react";
import Header from "@/components/header";
import { useRouter } from "next/router";

const MainLayout = (props:any) => {
  const router = useRouter();

  useEffect(() => {
    const accessToken:string = JSON.parse(localStorage.getItem("accessToken") || "");
    !accessToken && router.push("/auth/login");
  }, [router]);

  return (
    <div className="main-layout">
      <Header />
      {props.children}
    </div>
  );
};

export default MainLayout;

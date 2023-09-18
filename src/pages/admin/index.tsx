import React, { FunctionComponent, useState, useEffect } from "react";
import { ADMIN_LAYOUT } from "@/utlis/constant";
import Head from "next/head";
import { Card, List, Typography } from "antd";
import axiosClient from "@/pages/api/axiosClient";
import { DRINK_LIST_URL } from "@/utlis/constant";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

interface drinkType {
    _id: string;
    name: string;
    title: string;
    image: string;
}

const Dashboard: FunctionComponent = (props: any) => {
    

    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>

            <h1 className="my-4">Dashboard</h1>
        </>
    );
};

export async function getServerSideProps(context: any) {
    let breadcrumbs = [{ title: "Dashboard" }];

    return {
        props: {
            breadcrumbs,
            layout: ADMIN_LAYOUT,
        },
    };
}

export default Dashboard;

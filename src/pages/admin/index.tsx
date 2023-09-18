import React, { FunctionComponent } from "react";
import { ADMIN_LAYOUT } from "@/utlis/constant";
import Head from "next/head";

const Admin: FunctionComponent = () => {
    return (
        <>
            <Head>
                <title>Admin</title>
            </Head>
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

export default Admin;

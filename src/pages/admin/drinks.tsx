import React, { FunctionComponent, useState, useEffect } from "react";
import { ADMIN_LAYOUT } from "@/utlis/constant";
import Head from "next/head";
import { Card, List, Typography } from "antd";
import axiosClient from "@/pages/api/axiosClient";
import { DRINK_LIST_URL } from "@/utlis/constant";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface drinkType {
    _id: string;
    name: string;
    title: string;
    image: string;
}

const Dashboard: FunctionComponent = (props: any) => {
    const searchParams = useSearchParams();
    const page = searchParams.get("page") || 1;
    const [drinkList, setDrinkList] = useState<drinkType[]>([]);
    const [total, setTotal] = useState(1);
    const limit: number = 5;
    const router = useRouter();

    useEffect(() => {
        axiosClient
            .get(`${DRINK_LIST_URL}?limit=${limit}&page=${page}`)
            .then((res) => {
                setTotal(res?.data?.meta?.total);
                setDrinkList(res?.data?.data);
            })
            .catch((err) => console.log(err));
    }, [page]);

    return (
        <>
            <Head>
                <title>Drinks</title>
            </Head>

            <h1 className="my-4">Drinks List</h1>
            <List
                grid={{ column: 5, gutter: 48 }}
                dataSource={drinkList}
                renderItem={(item) => (
                    <List.Item className="mb-5">
                        <Card
                            cover={
                                <Image
                                    src={item?.image}
                                    alt="drinks"
                                    width={260}
                                    height={250}
                                    className="object-fit-cover rounded"
                                />
                            }
                            style={{ minHeight: "385px", border: "2px solid beige" }}
                        >
                            <Card.Meta
                                title={item?.name}
                                description=<Typography.Paragraph ellipsis={{ tooltip: item?.title, rows: 2 }}>
                                    {item?.title}
                                </Typography.Paragraph>
                            />
                        </Card>
                    </List.Item>
                )}
                pagination={{
                    responsive: true,
                    position: "bottom",
                    align: "center",
                    pageSize: limit,
                    total: total,
                    onChange: (page, pageSize) => {
                        router.push(`?page=${page}`);
                    },
                }}
            />
        </>
    );
};

export async function getServerSideProps(context: any) {
    let breadcrumbs = [{ title: "Dashboard", href: "/admin"}, {title: "Drinks"}];

    return {
        props: {
            breadcrumbs,
            layout: ADMIN_LAYOUT,
        },
    };
}

export default Dashboard;

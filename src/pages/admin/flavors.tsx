import React, { FunctionComponent, useState, useEffect } from "react";
import { ADMIN_LAYOUT } from "@/utlis/constant";
import Head from "next/head";
import { Card, List, Typography } from "antd";
import axiosClient from "@/pages/api/axiosClient";
import { FLAVOR_LIST_URL } from "@/utlis/constant";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

interface flavorType {
    _id: string;
    name: string;
    title: string;
    image: string;
}

const Flavors: FunctionComponent = (props: any) => {
    const searchParams = useSearchParams();
    const page = searchParams.get("page") || 1;
    const [flavorList, setFlavorList] = useState<flavorType[]>([]);
    const [total, setTotal] = useState(1);
    const limit: number = 12;
    const router = useRouter();

    useEffect(() => {
        axiosClient
            .get(`${FLAVOR_LIST_URL}?limit=${limit}&page=${page}`)
            .then((res) => {
                setTotal(res?.data?.meta?.total);
                setFlavorList(res?.data?.data);
            })
            .catch((err) => console.log(err));
    }, [page]);


    return (
        <>
            <Head>
                <title>Genres</title>
            </Head>

            <h1 className="my-4">Genres List</h1>
            <List
                grid={{ column: 4, gutter: 48 }}
                dataSource={flavorList}
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
                            style={{ minHeight: "300px", border: "2px solid beige" }}
                        >
                            <Card.Meta
                                title={<div className="text-capitalize text-center">{item?.title}</div>}
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
    let breadcrumbs = [{ title: "Dashboard", href: "/admin"}, {title: "Flavors"}];

    return {
        props: {
            breadcrumbs,
            layout: ADMIN_LAYOUT,
        },
    };
}

export default Flavors;

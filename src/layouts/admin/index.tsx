import React, { FunctionComponent, useState, useEffect } from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableColumns, faWineGlassEmpty, faMusic, faUtensils } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "@/styles/admin/layout.module.scss";
import { usePathname } from "next/navigation";

interface AdminPropsLayout {
    children: any;
    breadcrumbs: any[];
}

const menuItem = [
    {
        label: <Link href="/admin">Dashboard</Link>,
        key: "/admin",
        icon: <FontAwesomeIcon icon={faTableColumns} />,
    },
    {
        label: <Link href="/admin/drinks">Drinks</Link>,
        key: "/admin/drinks",
        icon: <FontAwesomeIcon icon={faWineGlassEmpty} />,
    },
    {
        label: <Link href="/admin/genres">Genres</Link>,
        key: "/admin/genres",
        icon: <FontAwesomeIcon icon={faMusic} />,
    },
    {
        label: <Link href="/admin/flavors">Flavor</Link>,
        key: "/admin/flavors",
        icon: <FontAwesomeIcon icon={faUtensils} />,
    },
];

const AdminLayout = (props: AdminPropsLayout) => {
    const { children } = props;
    const pathname = usePathname();
    const [currentPage, setCurrentPage] = useState(pathname)

    useEffect(()=>{
        setCurrentPage(pathname)
    },[pathname])

    return (
        <Layout className="container-fluid p-0" hasSider style={{ minHeight: "100vh" }}>
            <Layout.Sider className="px-2">
                <Menu theme="dark" mode="inline" className="position-relative" style={{ top: "10vh" }} items={menuItem} selectedKeys={[currentPage]} />
            </Layout.Sider>

            <Layout>
                <Layout.Header className="overflow-hidden position-relative p-0" style={{ height: "10vh" }}>
                    <Breadcrumb
                        className={styles.breadcrumbs}
                        items={children?.props?.breadcrumbs.map((item: any) => {
                            return { title: item?.href ? <Link href={item?.href}>{item?.title}</Link> : item?.title };
                        })}
                    />
                </Layout.Header>
                <Layout.Content className="px-5 py-3">{children}</Layout.Content>
                <Layout.Footer></Layout.Footer>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;

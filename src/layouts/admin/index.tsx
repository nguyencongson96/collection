import React, { FunctionComponent } from "react";
import { Layout, Menu } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableColumns, faWineGlassEmpty, faMusic, faUtensils } from "@fortawesome/free-solid-svg-icons";

interface AdminPropsLayout {
    children: any;
    breadcrumbs?: any;
}

const menuItem = [
    {
        label: "Dashboard",
        key: "dashboard",
        icon: <FontAwesomeIcon icon={faTableColumns} />,
    },
    {
        label: "Drinks",
        key: "Drinks",
        icon: <FontAwesomeIcon icon={faWineGlassEmpty} />,
    },
    {
        label: "Genres",
        key: "Genres",
        icon: <FontAwesomeIcon icon={faMusic} />,
    },
    {
        label: "Flavor",
        key: "Flavor",
        icon: <FontAwesomeIcon icon={faUtensils} />,
    },
];

const AdminLayout = (props: AdminPropsLayout) => {
    const { children } = props;
    return (
        <Layout className="container-fluid px-5" hasSider style={{ minHeight: "100vh" }}>
            <Layout.Sider className="px-2">
                <Menu mode="inline" className="position-relative" style={{ top: "10vh" }} items={menuItem} />
            </Layout.Sider>

            <Layout>
                <Layout.Header className="overflow-hidden" style={{ height: "10vh" }}></Layout.Header>
                <Layout.Content>{children}</Layout.Content>
                <Layout.Footer></Layout.Footer>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;

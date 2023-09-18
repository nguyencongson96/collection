import "@/styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import { ADMIN_LAYOUT, AUTH_LAYOUT } from "@/utlis/constant";
import AdminLayout from "@/layouts/admin";
import AuthLayout from "@/layouts/auth";
import DefaultLayout from "@/layouts/default";
import { ConfigProvider } from "antd";
import { SessionProvider } from "next-auth/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    const router = useRouter();

    const layout = pageProps.layout ?? "";
    let wrapper = <Component {...pageProps} />;

    switch (layout) {
        case ADMIN_LAYOUT:
            wrapper = (
                <AdminLayout>
                    <Component {...pageProps} />
                </AdminLayout>
            );
            break;

        case AUTH_LAYOUT:
            wrapper = (
                <AuthLayout>
                    <Component {...pageProps} />
                </AuthLayout>
            );
            break;

        default:
            wrapper = (
                <DefaultLayout>
                    <Component {...pageProps} />
                </DefaultLayout>
            );
            break;
    }

    useEffect(() => {
        const handleStart = () => NProgress.start();
        const handleComplete = () => NProgress.done();
        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);
        return () => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleComplete);
            router.events.off("routeChangeError", handleComplete);
        };
    }, [router]);

    return (
        <SessionProvider session={session}>
            <ConfigProvider
                theme={{
                    token: {
                        fontFamily: `"Roboto", sans-serif;`,
                        colorBgLayout: "#2c3e50",
                        fontSize: 14,
                        // colorPrimary: '#0EB8DD',
                    },
                }}
            >
                {wrapper}
            </ConfigProvider>
        </SessionProvider>
    );
}

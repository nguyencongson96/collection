import Link from "next/link";
import React from "react";
import Head from "next/head";

const NotFoundPage = () => {
    return (
        <>
            <Head>
                <title>Not Found</title>
            </Head>
            <div
                className="page_404"
                style={{ padding: "40px 0", background: "#fff", fontFamily: "'Libre Baskerville', serif", minHeight: "100vh" }}
            >
                <div className="container text-center position-absolute" style={{top: "50%", left: "50%", transform: "translate(-50%,-50%)"}}>
                    <div
                        className="four_zero_four_bg w-100"
                        style={{
                            backgroundImage: "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
                            backgroundRepeat: "no-repeat",
                            height: "400px",
                            backgroundPosition: "center",
                        }}
                    >
                        <h1 className="text-center" style={{ fontSize: "80px" }}>
                            404
                        </h1>
                    </div>

                    <div className="contant_box_404">
                        <h3 className="h2">Look like you`re lost</h3>

                        <p>the page you are looking for not avaible!</p>

                        <Link href="/" className="link_404 d-inline-block p-3 my-2 rounded" style={{ color: "#fff", background: "#39ac31" }}>
                            Go to Home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;

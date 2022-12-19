import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
const Home = () => {
    return <Layout title="Home / Twitter">
        <div className="h-screen flex flex-row">
            {/* Sidebar  */}
            <Sidebar />
            {/* Homefeed Section  */}

            {/* Right Explore bar */}

        </div>
    </Layout>;
};

export default Home;

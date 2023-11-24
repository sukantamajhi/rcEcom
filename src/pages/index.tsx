import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../common/Header";
import Login from "../components/auth/login/Login";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [loginModal, setLoginModal] = useState(false);

    useEffect(() => {
        setLoginModal(true);
    }, [loginModal]);

    return (
        <div className={``}>
            <div className={`sticky top-0`}>
                <Header />
            </div>
            {loginModal && (
                <div className={`absolute w-full`}>
                    <Login />
                </div>
            )}
        </div>
    );
}

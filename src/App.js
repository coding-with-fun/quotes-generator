import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Quote from "./components/Quote";

function App() {
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        let timer = setTimeout(() => setShowLoading(false), 2000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="main">
            {showLoading && <Loading />}

            <div
                className={
                    showLoading
                        ? `body_main__container invisible`
                        : `body_main__container visible`
                }
            >
                <div className="main__container">
                    <Quote />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;

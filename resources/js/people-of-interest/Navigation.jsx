import { useState } from "react";

function Navigation() {
    const [visibility, setVisibility] = useState(true);

    const toggleVisibility = () => {
        setVisibility((prevVisibility) => !prevVisibility);
    };

    return (
        <>
            <nav
                className={
                    "left-menu" + (visibility ? "" : " left-menu_hidden")
                }
            >
                <div
                    className="left-menu__visibility-toggle"
                    onClick={toggleVisibility}
                >
                    &#60;
                </div>

                <div className="left-menu__content">
                    <div className="left-menu__header">
                        <img
                            className="left-menu__seal"
                            src="/images/mi6-seal.png"
                            alt="MI6 seal"
                        />
                    </div>

                    <div className="left-menu__links">
                        <a to="/">Home</a>
                        <a to="/people-of-interest">People of interest</a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navigation;

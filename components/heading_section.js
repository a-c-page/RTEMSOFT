import React from "react";

const Heading = ({ title, desc }) => {
    return (
        <div
            className="h-[250px] rounded-xl m-4"
            style={{
                backgroundImage: "url('header_bg.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <h1 className="p-8 text-xl font-bold text-white md:text-6xl">
                {title}
            </h1>
            <p className="p-8 mt-[-45px] text-white">{desc}</p>
        </div>
    );
};

export default Heading;

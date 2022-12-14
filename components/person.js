import React from "react";

const Person = ({ name, desc, photo, key }) => {
    return (
        <div className="mt-5 h-[300px]" key={key}>
            <div
                className="h-[230px] rounded-2xl shadow-md"
                style={{
                    backgroundImage: `url('/team/${photo}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>
            <p className="mt-3 text-base font-semibold text-gray-600">{name}</p>
            <p className="text-base font-semibold text-indigo-700">{desc}</p>
        </div>
    );
};

export default Person;

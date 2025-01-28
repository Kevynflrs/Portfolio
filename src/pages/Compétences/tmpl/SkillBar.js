import React from "react";

export default function SkillBar({ name, percentage }) {
    return (
        <div className="flex flex-col w-full mb-4 sm:mb-6 items-center sm:w-10/12 mx-auto">
            <div className="flex justify-between text-sm sm:text-base mb-1 w-full">
                <span className="text-[#1e2c2c]">{name}</span>
                <span className="text-[#1e2c2c]">{percentage}%</span>
            </div>
            <div className="relative w-full h-2 bg-[#b6bffc] rounded">
                <div
                    className="absolute h-2 bg-[#1e2c2c] rounded"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
}
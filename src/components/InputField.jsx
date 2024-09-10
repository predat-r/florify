import React from "react";
import { forwardRef } from "react";

const InputField = forwardRef(
  ({ error, label, type, editable = true, text }, ref) => {
    return (
      <div className="w-full font-inter h-20 flex flex-row pl-2 text-left  pt-5 md:p-5 items-center justify-end md:pr-5 ">
        <div className="w-full sm:mr-36 lg:mr-96 pr-3 sm:pr-4 md:pr-5 flex flex-row justify-end items-center h-full space-x-2 md:space-x-14">
          <h1 className="text-md  md:text-2xl text-bars font-semibold">
            {label} :
          </h1>
          {type === "password" ? (
            <input
            type="password"
              readOnly={!editable}
              ref={ref}
              defaultValue={text}
              className={`h-10 p-1 resize-none md:p-2 focus:outline-none w-44 md:h-full md:w-2/4 rounded-md shadow-md bg-[#E5FFE6] outline ${
                error ? "outline-red-500" : "outline-none"
              } ${editable ? "text-black" : "text-gray-400"}`}
            ></input>
          ) : (
            <textarea
              readOnly={!editable}
              ref={ref}
              defaultValue={text}
              className={`h-10 p-1 resize-none md:p-2 focus:outline-none w-44 md:h-full md:w-2/4 rounded-md shadow-md bg-[#E5FFE6] outline ${
                error ? "outline-red-500" : "outline-none"
              } ${editable ? "text-black" : "text-gray-400"}`}
            ></textarea>
          )}
        </div>
      </div>
    );
  }
);

export default InputField;

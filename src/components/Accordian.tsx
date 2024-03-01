"use client";

import { useState } from "react";
import { accordian } from "@/lib/data";
export const Accordian = () => {
  const [select, setSelect] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [multiSelect, setMultiSelect] = useState([]);

  const handleSelect = (id: string) => {
    //@ts-ignore
    setSelect(id === select ? null : id);
  };

  const handleMultiSelect = (id: string | undefined) => {
    let cpy = [...multiSelect];
    //@ts-ignore
    const indexOfCurr = cpy.indexOf(id);
    if (indexOfCurr === -1) {
      //@ts-ignore
      cpy.push(id);
    } else {
      cpy.splice(indexOfCurr, 1);
    }
    setMultiSelect(cpy);
  };
  return (
    <div className="">
      <div
        onClick={() => setEnabled(!enabled)}
        className="relative group my-8 cursor-pointer"
      >
        <div
          className={
            enabled
              ? "absolute -inset-0.5 bg-gradient-to-r from-green-600 to-blue-300 blur group-hover:blur-lg transition duration-500"
              : "absolute -inset-0.5 bg-gradient-to-r from-red-600 to-rose-300 blur group-hover:blur-lg transition duration-500"
          }
        ></div>
        <div
          className={
            enabled ? "relative p-4 bg-green-600" : "relative p-4 bg-red-600"
          }
        >
          {enabled ? "Disable Multi Select" : "Enable Multi Select"}
        </div>
      </div>
      {accordian.map((item) => (
        <div className="flex flex-col justify-center items-center my-4">
          <div
            onClick={
              enabled
                ? () => handleMultiSelect(item.id)
                : () => handleSelect(item.id)
            }
            className="flex justify-between items-center gap-4 p-4 box-content bg-yellow-900 w-[500px] cursor-pointer"
          >
            <div>{item.question}</div>
            <div>+</div>
          </div>
          {enabled
            ? //@ts-ignore
              multiSelect.indexOf(item.id) !== -1 && (
                <div className="bg-yellow-900 w-[532px] p-8">{item.answer}</div>
              )
            : select === item.id && (
                <div className="bg-yellow-900 w-[532px] p-8">{item.answer}</div>
              )}
        </div>
      ))}
    </div>
  );
};

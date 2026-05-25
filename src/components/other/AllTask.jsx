import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div
      id="allTask"
      className="bg-[#1C1C1C] p-5 rounded mt-5"
    >
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="h-1/5 font-semibold">Employee Name</h2>
        <h3 className="w-1/5 font-semibold">New Task</h3>
        <h5 className="w-1/5 font-semibold">Active Task</h5>
        <h5 className="w-1/5 font-semibold">Completed</h5>
        <h5 className="w-1/5 font-semibold">Failed</h5>
      </div>
      <div className="child overflow-auto">
        {authData.employees.map((elem) => {
          return (
            <div className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded">
              <h2 className="h-1/5">{elem.firstName}</h2>
              <h3 className="w-1/5 text-white pl-14">Task</h3>
              <h5 className="w-1/5 text-white pl-9">Status</h5>
              <h5 className="w-1/5 text-white pl-4">Status</h5>
              <h5 className="w-1/5 text-white">Status</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;

import React from "react";

const CompleteTask = () => {
  return (
    <div className="flex-shrink-0 h-full w-[400px] p-5 bg-blue-400 rounded-xl">
      <div className="flex items-center justify-between">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
        <h4 className="text-sm">20 May 2026</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
      <p className="text-sm mt-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book
      </p>
      <div className="mt-2">
        <button className="w-full bg-green-500 py-1 px-2 text-sm">Complete</button>
      </div>
    </div>
  );
};

export default CompleteTask;

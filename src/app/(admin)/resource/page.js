"use client";
import { useEffect } from "react";
import Tabs from "./tabs/tabs";

export default function Resource() {
    useEffect(() => {
        // Import Flowbite only on the client side
        import("flowbite").then((module) => {
          const { initFlowbite } = module;
          initFlowbite();
        });
      }, []);
  return (
    <section>
      <div className="relative overflow-x-auto sm:rounded-lg">
        <h1 className="text-2xl text-black underline mb-3 font-bold">
          Resource
        </h1>
      </div>
      <Tabs />
    </section>
  );
}

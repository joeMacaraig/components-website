import { Accordian } from "@/components/Accordian";
import Image from "next/image";

export default function Home() {
  return (
    <section className="p-4">
      <h1 className="text-2xl font-medium">components</h1>
      <div className="flex h-full items-center justify-center">
        <Accordian />
      </div>
    </section>
  );
}

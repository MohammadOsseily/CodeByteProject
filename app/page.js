import Image from "next/image";
import SearchBox from "./search";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between p-24">
        <SearchBox/>
    </main>
  );
}

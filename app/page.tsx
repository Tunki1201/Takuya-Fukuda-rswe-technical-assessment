import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/appStore/Tools"}>
        <span className="text-[white]">Click Here for the result</span>
      </Link>
    </main>
  );
}

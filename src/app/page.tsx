import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Main CMS",
  description: "Build digital experiences for any tech stack, visually.",
};

export default function Home() {
  return (
    <>
      <main className="h-screen border-2 flex flex-col pt-32">
        <h1>test</h1>
      </main>
    </>
  );
}

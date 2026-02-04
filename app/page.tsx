import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <Image
        className="dark:invert"
        src="/debriefer.svg"
        alt="Debriefer logo"
        width={330}
        height={62}
        priority
      />
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <h1 className="max-w-xs text-3xl font-medium leading-10 tracking-tight text-zinc-500 dark:text-zinc-50">
          Coming Soon
        </h1>
      </div>
    </main>
  );
}

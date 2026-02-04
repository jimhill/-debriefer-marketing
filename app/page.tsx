import Image from 'next/image';
import DotGrid from './components/dot-grid';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-12 px-16 sm:py-32 bg-white dark:bg-black sm:items-start">
      <div className="flex flex-col gap-2 items-start text-left">
        <Image
          className="dark:invert w-[150px] h-[28px] sm:w-[200px] sm:h-[40px]"
          src="/debriefer.svg"
          alt="Debriefer logo"
          width={330}
          height={62}
          priority
        />
        <h1 className="mt-2 max-w-xl text-xl sm:text-2xl font-medium leading-tight tracking-tight text-zinc-500 dark:text-zinc-50 text-pretty">
          Gather deep qualitative research through interviews fast.
        </h1>
        <h2 className="max-w-xl text-base font-semibold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 text-pretty">
          The building blocks you need to design, conduct, and analyze your own
          AI-run interviews rapidly and at scale.
        </h2>
        <p className="max-w-xl text-sm text-zinc-500 dark:text-zinc-50 text-pretty">
          Coming soon: APIs, SDKs, MCPs, Editors, and more.
        </p>
      </div>
      <div className="w-full min-h-[200px] h-[200px] relative">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#271E37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
    </main>
  );
}

import Image from 'next/image';
import DotGrid from './components/dot-grid';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-12 px-16 sm:py-32 bg-white dark:bg-black sm:items-start">
      <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
        <Image
          className="dark:invert w-[150px] h-[28px] sm:w-[200px] sm:h-[40px]"
          src="/debriefer.svg"
          alt="Debriefer logo"
          width={330}
          height={62}
          priority
        />
        <h1 className="max-w-xs text-base sm:text-xl font-medium leading-tight tracking-tight text-zinc-500 dark:text-zinc-50 text-pretty">
          Building blocks for gathering deep qualitative research fast.
        </h1>
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

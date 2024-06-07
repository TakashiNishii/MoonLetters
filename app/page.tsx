import SignsList from "./components/SignsList";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-primary flex-col items-center p-24">
      <h1 className="text-4xl font-extrabold text-neutral">
        <span
          className="animate-pulse
          duration-3000
        "
        >
          🔮
        </span>
        MoonLetters
      </h1>
      <p className="text-2xl text-neutral">
        Select your zodiac sign to view your horoscope:
      </p>
      <SignsList />
    </main>
  );
}

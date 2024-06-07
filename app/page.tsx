import Header from "./components/Header";
import SignsList from "./components/SignsList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <Header />
      <p className="text-xs md:text-2xl text-neutral text-center">
        Select your zodiac sign to view your horoscope:
      </p>
      <SignsList />
    </main>
  );
}

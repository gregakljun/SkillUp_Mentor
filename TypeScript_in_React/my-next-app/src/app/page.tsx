import Button from "./components/button";

export default function Home() {
  fetch("https://jsonplaceholder.typicode.com/users", {
    next: {
      revalidate: 3600,
    }
  });
  return (
    <main className="min-h-screen flex justify-center items-center">
      <Button />
    </main>
  );
}

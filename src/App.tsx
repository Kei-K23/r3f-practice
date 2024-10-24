import Experience from "./components/Experience";
import { Interface } from "./components/Interface";

export default function Main() {
  return (
    <main className="w-full h-screen bg-gradient-to-b from-gray-900 to-gray-600">
      <Experience />
      <Interface />
    </main>
  );
}

import { GeistSans } from "geist/font/sans";
import TodosView from "./components/TodosView";
import { cn } from "~/lib/utils";

export default function HomePage() {
  return (
    <main className={cn([GeistSans.className, "text-black"])}>
      <section id="home-menu" className="mx-auto max-w-md space-y-4 p-4">
        <h1 className={cn(["text-2xl font-bold"])}>Simple TODO App</h1>
        <TodosView />
      </section>
    </main>
  );
}

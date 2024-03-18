import InputArea from "./components/inputArea";
import TodoArea from "./components/todoArea";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl"> TO-DO LIST </h1>
      <div>
        {/* INPUT AREA */}
        <InputArea />
      </div>
      <div>
        <TodoArea />
      </div>
    </main>
  );
}

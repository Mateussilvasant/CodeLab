import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Video } from "../../components/Video/Video";
import "./styles.css";

export function Event() {
  return (
    <div className="page-event">
      <Header />
      <main>
        <Video />
        <Sidebar />
      </main>
    </div>
  );
}

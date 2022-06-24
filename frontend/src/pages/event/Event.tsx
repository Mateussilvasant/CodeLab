import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Video } from "../../components/Video/Video";
import "./styles.css";

type EventParams = {
  slug: string;
};

export function Event() {
  const { slug } = useParams<EventParams>();

  return (
    <div className="page-event">
      <Header />
      <main>
        <Video slug={slug} />
        <Sidebar currentLessonSlug={slug ? slug : ""} />
      </main>
    </div>
  );
}

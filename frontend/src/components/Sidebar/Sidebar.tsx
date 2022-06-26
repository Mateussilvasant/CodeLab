import { useGetLessonsQuery } from "../../graphql/generated";
import { Lesson } from "../Lesson/Lesson";
import "./styles.css";

export type SidebarProps = {
  currentLessonSlug: string;
};

export const Sidebar = ({ currentLessonSlug }: SidebarProps) => {
  const { data } = useGetLessonsQuery();

  return (
    <aside className="lessons-sidebar">
      <span className="lessons-timeline">Cronograma de aulas</span>
      <div className="lessons-list">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              currentLessonSlug={currentLessonSlug}
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
};

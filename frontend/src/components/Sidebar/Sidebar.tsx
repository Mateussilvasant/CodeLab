import { gql, useQuery } from "@apollo/client";
import { Lesson } from "../Lesson/Lesson";
import "./styles.css";

interface LessonsResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: "live" | "class";
  }[];
}

const GET_LESSONS_QUERY = gql`
  query listLessonsByStagePublished {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`;

export type SidebarProps = {
  currentLessonSlug: string;
};

export const Sidebar = ({ currentLessonSlug }: SidebarProps) => {
  const { data } = useQuery<LessonsResponse>(GET_LESSONS_QUERY);

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

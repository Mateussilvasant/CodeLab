import "./styles.css";
import { CheckCircle, Lock } from "phosphor-react";
import { format, isPast } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

type LessonProps = {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
};

export const Lesson = ({ availableAt, slug, title, type }: LessonProps) => {
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(
    availableAt,
    "EEEE ' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBr,
    }
  );

  return (
    <a href="#" className="lesson-card">
      <span>{availableDateFormatted}</span>
      <div className="lesson-content">
        <header>
          {isLessonAvailable ? (
            <span className="content-released">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="content-released content-block">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className="live-content">
            {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong>{title}</strong>
      </div>
    </a>
  );
};

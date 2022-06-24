import { CaretRight, IconProps } from "phosphor-react";
import "./styles.css";

export type LessonButtonOptionsProps = {
  title: string;
  content_text: string;
  icon: React.ComponentType<IconProps>;
  href: string;
};

export const LessonButtonOptions = ({
  title,
  content_text,
  icon: Icon,
  href,
}: LessonButtonOptionsProps) => {
  return (
    <a href={href} className="option">
      <div className="icon">
        <Icon size={40} />
      </div>
      <div className="content">
        <strong>{title}</strong>
        <p>{content_text}</p>
      </div>
      <div className="click-area">
        <CaretRight size={24} />
      </div>
    </a>
  );
};

import { DefaultUi, Player, Youtube } from "@vime/react";
import { DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";
import { LessonButtonOptions } from "./LessonButtonOptions";
import "./styles.css";
import "@vime/core/themes/default.css";
import { Fragment } from "react";
import { useGetLessonBySlugQuery } from "../../graphql/generated";

type VideoProps = {
  slug?: string;
};

export const Video = ({ slug }: VideoProps) => {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: slug,
    },
  });

  return (
    <div className="video-lesson">
      {data && data.lesson ? (
        slug && (
          <Fragment>
            <div className="player-background">
              <div className="player">
                <Player>
                  <Youtube videoId={data.lesson.videoId}></Youtube>
                  <DefaultUi />
                </Player>
              </div>
            </div>
            <div className="video-content">
              <div className="video-description">
                <div className="description">
                  <h1>{data.lesson.title}</h1>
                  <p>{data.lesson.description}</p>
                  {data.lesson.teacher && (
                    <div className="lesson-teacher">
                      <img
                        src={data.lesson.teacher.avatarURL}
                        alt="teacher-img"
                      />
                      <div>
                        <strong>{data.lesson.teacher.name}</strong>
                        <span>{data.lesson.teacher.bio}</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="lesson-buttons">
                  <a href="" className="discord-button">
                    <DiscordLogo size={24} />
                    Comunidade do discord
                  </a>
                  <a href="" className="challenge-button">
                    <Lightning size={24} />
                    Acesse o desafio
                  </a>
                </div>
              </div>
              <div className="lesson-options">
                <LessonButtonOptions
                  content_text="Acesse o material complementar para acelerar o seu desenvolvimento"
                  href=""
                  icon={FileArrowDown}
                  title="Material complementar"
                />
                <LessonButtonOptions
                  content_text="Baixe wallpapers exclusivos do CodeLab e personalize a sua máquina"
                  href=""
                  icon={FileArrowDown}
                  title="Wallpapers exclusivos"
                />
              </div>
            </div>
          </Fragment>
        )
      ) : (
        <Fragment>
          <p>Carregando...</p>
        </Fragment>
      )}
    </div>
  );
};

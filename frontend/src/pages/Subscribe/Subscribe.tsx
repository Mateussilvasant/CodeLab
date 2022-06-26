import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../components/Header/Logo";
import { useCreateSubscriberMutation } from "../../graphql/generated";
import "./styles.css";

export const Subscribe = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  const handleSubscribe = (event: FormEvent) => {
    event.preventDefault();

    createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate("/event");
  };

  return (
    <div className="subscribe">
      <div className="main-content">
        <div className="event-description">
          <Logo />
          <h1>
            Construa uma <strong>aplicação completa</strong>, do zero, com
            <strong> React</strong>
          </h1>
          <p>
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <div className="subscribe-box">
          <strong>Inscreva-se gratuitamente</strong>
          <form onSubmit={handleSubscribe}>
            <input
              value={name}
              type="text"
              placeholder="Seu nome completo"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              value={email}
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button disabled={loading} type="submit">
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src="/src/assets/code-mockup.png" alt="" />
    </div>
  );
};

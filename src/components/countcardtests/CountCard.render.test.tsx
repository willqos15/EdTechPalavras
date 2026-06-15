import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";
import CountCard from "../countcard";

vi.mock("./poup", () => ({
    default: ({ titulo, show }: any) =>
        show ? <div>{titulo}</div> : null,
}));

const props = {
    equipe: "Equipe Azul",
    bgcolor: "bg-blue",
    titlecolor: "text-white",
    textcolor: "text-blue",

    setStateE: vi.fn(),
    statee: 3,

    setPt: vi.fn(),
    pt: 5,

    setTotalPt: vi.fn(),
    totalpt: 5,

    setComport: vi.fn(),
    comport: 3,

    setObserv: vi.fn(),
    observ: "",

    name: "Equipe Azul",
    setName: vi.fn(),

    erro: [],

    arrayerro: [],

    arrayacerto: [],

    frases: [
        {
            palavra: "Brasil",
            dica: "",
        },
        {
            palavra: "Pará",
            dica: "",
        },
    ],

    fase: 0,

    alerterro: 0,
    alertacerto: 0,

    id: "Equipe Azul",
};

describe("CountCard - Render", () => {    test("deve renderizar o nome da equipe", () => {
        render(<CountCard {...props} />);

        expect(screen.getByText("Equipe Azul")).toBeInTheDocument();
    });

    test("deve renderizar a pontuação", () => {
        render(<CountCard {...props} />);

        expect(screen.getByText("5")).toBeInTheDocument();
        expect(screen.getByText("Pts")).toBeInTheDocument();
    });

    test("deve renderizar botão de erros", () => {
        render(<CountCard {...props} />);

        expect(
            screen.getByText("Erros : 0")
        ).toBeInTheDocument();
    });

    test("deve renderizar configurações", () => {
        render(<CountCard {...props} />);

        expect(
            screen.getByText("Configurações")
        ).toBeInTheDocument();
    });

    test("deve renderizar três energias quando statee = 3", () => {
        const { container } = render(<CountCard {...props} />);

        expect(
            container.querySelectorAll("svg").length
        ).toBeGreaterThan(3);
    });

    test("deve mostrar valor numérico quando energia for maior que cinco", () => {
        render(
            <CountCard
                {...props}
                statee={8}
            />
        );

        expect(
            screen.getByText(/Energia: 8/)
        ).toBeInTheDocument();
    });

    test("deve mostrar Pt quando totalpt for 1", () => {
        render(
            <CountCard
                {...props}
                totalpt={1}
            />
        );

        expect(
            screen.getByText("Pt")
        ).toBeInTheDocument();
    });

    test("deve mostrar Pt quando totalpt for 0", () => {
        render(
            <CountCard
                {...props}
                totalpt={0}
            />
        );

        expect(
            screen.getByText("Pt")
        ).toBeInTheDocument();
    });

    test("deve mostrar Pts quando maior que um", () => {
        render(
            <CountCard
                {...props}
                totalpt={10}
            />
        );

        expect(
            screen.getByText("Pts")
        ).toBeInTheDocument();
    });

    test("deve possuir botão adicionar pontos", () => {
        const { container } = render(<CountCard {...props} />);

        expect(
            container.querySelectorAll("button").length
        ).toBeGreaterThan(2);
    });

        test("deve chamar setPt ao clicar em adicionar ponto", async () => {
        const user = userEvent.setup();

        const { container } = render(<CountCard {...props} />);

        const botoes = container.querySelectorAll("button");

        await user.click(botoes[0]);

        expect(props.setPt).toHaveBeenCalled();
    });

    test("deve chamar setPt ao clicar em remover ponto", async () => {
        const user = userEvent.setup();

        const { container } = render(<CountCard {...props} />);

        const botoes = container.querySelectorAll("button");

        await user.click(botoes[1]);

        expect(props.setPt).toHaveBeenCalled();
    });

    test("deve abrir popup de configurações", async () => {
        const user = userEvent.setup();

        render(<CountCard {...props} />);

        await user.click(
            screen.getByText("Configurações")
        );

        expect(
            screen.getByText("Configuração")
        ).toBeInTheDocument();
    });

    test("deve abrir popup de relatório de erros", async () => {
        const user = userEvent.setup();

        render(<CountCard {...props} />);

        await user.click(
            screen.getByText("Erros : 0")
        );

        expect(
            screen.getByText("Relatório de erros")
        ).toBeInTheDocument();
    });

    test("deve abrir popup de relatório de acertos", async () => {
        const user = userEvent.setup();

        render(<CountCard {...props} />);

        await user.click(
            screen.getByText("5")
        );

        expect(
            screen.getByText("Relatório de Acertos")
        ).toBeInTheDocument();
    });

    test("deve renderizar quantidade de erros da fase", () => {

        render(
            <CountCard
                {...props}
                arrayerro={[
                    {
                        equipe: "Equipe Azul",
                        tentativa: "A",
                        fase: 0,
                    },
                    {
                        equipe: "Equipe Azul",
                        tentativa: "B",
                        fase: 0,
                    },
                ]}
            />
        );

        expect(
            screen.getByText("Erros : 2")
        ).toBeInTheDocument();

    });

    test("não deve contabilizar erros de outra fase", () => {

        render(
            <CountCard
                {...props}
                arrayerro={[
                    {
                        equipe: "Equipe Azul",
                        tentativa: "A",
                        fase: 1,
                    },
                ]}
            />
        );

        expect(
            screen.getByText("Erros : 0")
        ).toBeInTheDocument();

    });

    test("não deve contabilizar erros de outra equipe", () => {

        render(
            <CountCard
                {...props}
                arrayerro={[
                    {
                        equipe: "Equipe Vermelha",
                        tentativa: "A",
                        fase: 0,
                    },
                ]}
            />
        );

        expect(
            screen.getByText("Erros : 0")
        ).toBeInTheDocument();

    });

});
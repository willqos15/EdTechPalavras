import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";
import CountCard from "../countcard";

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
            dica: ""
        }
    ],

    fase: 0,

    alerterro: 0,
    alertacerto: 0,

    id: "Equipe Azul"
};

describe("CountCard Config", () => {

    async function abrirConfiguracoes(user: any) {

        render(<CountCard {...props} />);

        await user.click(
            screen.getByText("Configurações")
        );

    }

    test("deve abrir popup configuração", async () => {

        const user = userEvent.setup();

        await abrirConfiguracoes(user);

        expect(
            screen.getByText("Configuração")
        ).toBeInTheDocument();

    });

    test("deve possuir slider comportamento", async () => {

        const user = userEvent.setup();

        await abrirConfiguracoes(user);

        expect(
            screen.getByRole("slider")
        ).toBeInTheDocument();

    });

    test("deve possuir campo nome", async () => {

        const user = userEvent.setup();

        await abrirConfiguracoes(user);

        expect(
            screen.getByDisplayValue("Equipe Azul")
        ).toBeInTheDocument();

    });

    test("deve possuir textarea observações", async () => {

        const user = userEvent.setup();

        await abrirConfiguracoes(user);

        const textarea = document.querySelector("textarea");

        expect(textarea).toBeInTheDocument();


    });

    test("deve alterar nome da equipe", async () => {

        const user = userEvent.setup();

        await abrirConfiguracoes(user);

        const input = screen.getByDisplayValue("Equipe Azul");

        await user.clear(input);

        await user.type(input, "Os Campeões");

        expect(props.setName).toHaveBeenCalled();

    });


    test("deve chamar setObserv ao digitar observação", async () => {

        const user = userEvent.setup();

        await abrirConfiguracoes(user);

        const textarea = document.querySelector("textarea") as HTMLTextAreaElement;

        expect(textarea).toBeInTheDocument();

        await user.type(textarea, "Muito participativa");

        expect(props.setObserv).toHaveBeenCalled();

    });

    test("deve chamar setComport ao alterar slider", async () => {

        const user = userEvent.setup();

        await abrirConfiguracoes(user);

        const slider = screen.getByRole("slider");

        fireEvent.change(slider, {
            target: {
                value: "5"
            }
        });

        expect(props.setComport).toHaveBeenCalled();

    });

    test("deve possuir dois inputs numéricos", async () => {

        const user = userEvent.setup();

        await abrirConfiguracoes(user);

        const inputs = screen.getAllByRole("textbox");

        expect(inputs.length).toBeGreaterThanOrEqual(3);

    });

    test("deve aceitar apenas números no campo pontos", async () => {

        const user = userEvent.setup();

        await abrirConfiguracoes(user);

        const inputs = screen.getAllByRole("textbox");

        const pontos = inputs[1];

        await user.type(pontos, "abc123");

        expect(pontos).toHaveValue("123");

    });

    test("deve aceitar apenas números no campo energia", async () => {

        const user = userEvent.setup();

        await abrirConfiguracoes(user);

        const inputs = screen.getAllByRole("textbox");

        const energia = inputs[2];

        await user.type(energia, "x9y");

        expect(energia).toHaveValue("9");

    });

    test("deve chamar setPt ao apertar Enter", async () => {

        const user = userEvent.setup();

        await abrirConfiguracoes(user);

        const inputs = screen.getAllByRole("textbox");

        const pontos = inputs[1];

        await user.type(pontos, "15{enter}");

        expect(props.setPt).toHaveBeenCalled();

    });

    test("deve chamar setStateE ao apertar Enter", async () => {

        const user = userEvent.setup();

        await abrirConfiguracoes(user);

        const inputs = screen.getAllByRole("textbox");

        const energia = inputs[2];

        await user.type(energia, "7{enter}");

        expect(props.setStateE).toHaveBeenCalled();

    });

    test("deve chamar setPt ao clicar no botão confirmar pontos", async () => {

        const user = userEvent.setup();

        await abrirConfiguracoes(user);

        const botoes = screen.getAllByRole("button");

        // Os dois últimos botões são os ✔
        await user.click(botoes[botoes.length - 2]);

        expect(props.setPt).toHaveBeenCalled();

    });

    test("deve chamar setStateE ao clicar no botão confirmar energia", async () => {

        const user = userEvent.setup();

        await abrirConfiguracoes(user);

        const botoes = screen.getAllByRole("button");

        await user.click(botoes[botoes.length - 1]);

        expect(props.setStateE).toHaveBeenCalled();

    });

    test("deve limitar nome da equipe para 12 caracteres", async () => {

        const user = userEvent.setup();

        await abrirConfiguracoes(user);

        const input = screen.getByDisplayValue("Equipe Azul");

        expect(input).toHaveAttribute("maxLength", "12");

        await user.clear(input);
        await user.type(input, "ABCDEFGHIJKLMNOP");

        expect(props.setName).toHaveBeenCalled();

    });

    test("deve exibir texto Muito ruim quando comportamento = 1", async () => {

        const user = userEvent.setup();

        render(
            <CountCard
                {...props}
                comport={1}
            />
        );

        await user.click(screen.getByText("Configurações"));

        expect(
            screen.getByText(/Muito ruim/i)
        ).toBeInTheDocument();

    });

    test("deve exibir texto Ruim quando comportamento = 2", async () => {

        const user = userEvent.setup();

        render(
            <CountCard
                {...props}
                comport={2}
            />
        );

        await user.click(screen.getByText("Configurações"));

        expect(
            screen.getByText(/Ruim -1pt/i)
        ).toBeInTheDocument();

    });

    test("deve exibir texto Mediano quando comportamento = 3", async () => {

        const user = userEvent.setup();

        render(
            <CountCard
                {...props}
                comport={3}
            />
        );

        await user.click(screen.getByText("Configurações"));

        expect(
            screen.getByText(/Mediano/i)
        ).toBeInTheDocument();

    });

    test("deve exibir texto Bom quando comportamento = 4", async () => {

        const user = userEvent.setup();

        render(
            <CountCard
                {...props}
                comport={4}
            />
        );

        await user.click(screen.getByText("Configurações"));

        expect(
            screen.getByText(/Bom \+1pt/i)
        ).toBeInTheDocument();

    });

    test("deve exibir texto Muito Bom quando comportamento = 5", async () => {

        const user = userEvent.setup();

        render(
            <CountCard
                {...props}
                comport={5}
            />
        );

        await user.click(screen.getByText("Configurações"));

        expect(
            screen.getByText(/Muito Bom! \+2pts/i)
        ).toBeInTheDocument();

    });


    test("deve calcular total de pontos quando comportamento = 1", () => {

        render(
            <CountCard
                {...props}
                comport={1}
                pt={10}
            />
        );

        expect(props.setTotalPt).toHaveBeenLastCalledWith(8);

    });

    test("deve calcular total de pontos quando comportamento = 2", () => {

        render(
            <CountCard
                {...props}
                comport={2}
                pt={10}
            />
        );

        expect(props.setTotalPt).toHaveBeenLastCalledWith(9);

    });

    test("deve calcular total de pontos quando comportamento = 3", () => {

        render(
            <CountCard
                {...props}
                comport={3}
                pt={10}
            />
        );

        expect(props.setTotalPt).toHaveBeenLastCalledWith(10);

    });

    test("deve calcular total de pontos quando comportamento = 4", () => {

        render(
            <CountCard
                {...props}
                comport={4}
                pt={10}
            />
        );

        expect(props.setTotalPt).toHaveBeenLastCalledWith(11);

    });

    test("deve calcular total de pontos quando comportamento = 5", () => {

        render(
            <CountCard
                {...props}
                comport={5}
                pt={10}
            />
        );

        expect(props.setTotalPt).toHaveBeenLastCalledWith(12);

    });

    test("deve adicionar um ponto", async () => {

        const user = userEvent.setup();

        render(<CountCard {...props} />);

        const botoes = screen.getAllByRole("button");

        await user.click(botoes[0]);

        expect(props.setPt).toHaveBeenCalled();

    });

    test("deve remover um ponto", async () => {

        const user = userEvent.setup();

        render(<CountCard {...props} />);

        const botoes = screen.getAllByRole("button");

        await user.click(botoes[1]);

        expect(props.setPt).toHaveBeenCalled();

    });

    test("deve mostrar energia em texto quando maior que cinco", () => {

        render(
            <CountCard
                {...props}
                statee={8}
            />
        );

        expect(
            screen.getByText(/Energia: 8/i)
        ).toBeInTheDocument();

    });

    test("não deve mostrar texto energia quando menor ou igual a cinco", () => {

        render(
            <CountCard
                {...props}
                statee={3}
            />
        );

        expect(
            screen.queryByText(/Energia:/i)
        ).not.toBeInTheDocument();

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

    test("deve abrir popup de relatório de erros", async () => {

        const user = userEvent.setup();

        render(<CountCard {...props} />);

        await user.click(
            screen.getByText(/Erros/i)
        );

        expect(
            screen.getByText("Relatório de erros")
        ).toBeInTheDocument();

    });

    test("deve mostrar alerta de acertos quando atingir a quantidade", () => {

        render(
            <CountCard
                {...props}
                pt={3}
                alertacerto={3}
                arrayacerto={[
                    {
                        equipe: "Equipe Azul",
                        tentativa: "Brasil",
                        fase: 0
                    }
                ]}
            />
        );

        expect(
            screen.getByText("NOTIFICAÇÃO")
        ).toBeInTheDocument();

        expect(
            screen.getByText(/atingiu 3 acertos/i)
        ).toBeInTheDocument();

    });

    test("deve mostrar alerta de erros quando atingir o limite", () => {

        render(
            <CountCard
                {...props}
                alerterro={2}
                arrayerro={[
                    {
                        equipe: "Equipe Azul",
                        tentativa: "A",
                        fase: 0
                    },
                    {
                        equipe: "Equipe Azul",
                        tentativa: "B",
                        fase: 0
                    }
                ]}
            />
        );

        expect(
            screen.getByText("NOTIFICAÇÃO")
        ).toBeInTheDocument();

        expect(
            screen.getByText(/atingiu 2 erros/i)
        ).toBeInTheDocument();

    });

    test("relatório de acertos deve listar tentativas", async () => {

        const user = userEvent.setup();

        render(
            <CountCard
                {...props}
                pt={2}
                arrayacerto={[
                    {
                        equipe: "Equipe Azul",
                        tentativa: "Brasil",
                        fase: 0
                    },
                    {
                        equipe: "Equipe Azul",
                        tentativa: "Pará",
                        fase: 0
                    }
                ]}
            />
        );

        await user.click(screen.getByText("5"));

        expect(screen.getByText(/Brasil/)).toBeInTheDocument();
        expect(screen.getByText(/Pará/)).toBeInTheDocument();

    });

    test("relatório de erros deve listar tentativas", async () => {

        const user = userEvent.setup();

        render(
            <CountCard
                {...props}
                arrayerro={[
                    {
                        equipe: "Equipe Azul",
                        tentativa: "Abacaxi",
                        fase: 0
                    },
                    {
                        equipe: "Equipe Azul",
                        tentativa: "Computador",
                        fase: 0
                    }
                ]}
            />
        );

        await user.click(screen.getByText(/Erros/i));

        expect(screen.getByText(/Abacaxi/i)).toBeInTheDocument();

        expect(screen.getByText(/Computador/i)).toBeInTheDocument();

    });

});
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";
import Classes from "./classes";

describe("Classes", () => {

    const setTurma = vi.fn();

    function renderComponent(turma = []) {
        return render(
            <Classes
                turma={turma}
                setTurma={setTurma}
            />
        );
    }

    test("deve renderizar o título", () => {
        renderComponent();

        expect(
            screen.getByText("Importar alunos.")
        ).toBeInTheDocument();
    });

    test("deve renderizar os requisitos", () => {
        renderComponent();

        expect(
            screen.getByText(/arquivo deve estar em formato Excel/i)
        ).toBeInTheDocument();

        expect(
            screen.getByText(/coluna chamada nome/i)
        ).toBeInTheDocument();
    });

    test("deve possuir botão para escolher arquivo", () => {
        renderComponent();

        expect(
            screen.getByText("Escolha um arquivo")
        ).toBeInTheDocument();
    });

    test("deve possuir input file", () => {
        renderComponent();

        const input = document.querySelector(
            'input[type="file"]'
        );

        expect(input).toBeInTheDocument();
    });

    test("deve aceitar apenas arquivos xlsx", () => {
        renderComponent();

        const input = document.querySelector(
            'input[type="file"]'
        ) as HTMLInputElement;

        expect(input.accept).toBe(".xlsx");
    });

    test("não deve mostrar lista de alunos inicialmente", () => {
        renderComponent();

        expect(
            screen.queryByText(/alunos:/i)
        ).not.toBeInTheDocument();
    });

    test("não deve mostrar botão excluir inicialmente", () => {
        renderComponent();

        expect(
            document.querySelector("svg")
        ).toBeNull();
    });

    test("deve possuir um label ligado ao input", () => {

        renderComponent();

        const label = screen.getByText("Escolha um arquivo");

        expect(label).toHaveAttribute("for", "arquivo");

    });

    test("deve permitir clicar no label", async () => {

        const user = userEvent.setup();

        renderComponent();

        await user.click(
            screen.getByText("Escolha um arquivo")
        );

        expect(
            screen.getByText("Escolha um arquivo")
        ).toBeInTheDocument();

    });

});
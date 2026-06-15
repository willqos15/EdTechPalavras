import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import Pmenu from "./Pmenu";

vi.mock("./Pquiz", () => ({
    default: ({ team }: any) => (
        <div>Team {team}</div>
    )
}));

vi.mock("../components/poup", () => ({
    default: ({ show, descricao }: any) =>
        show ? <div>{descricao}</div> : null
}));

vi.mock("./data/geo6/geo6", () => ({
    geo6: []
}));

describe("Pmenu", () => {

    test("deve renderizar o menu inicial", () => {

        render(<Pmenu />);

        expect(
            screen.getByText("Conteúdo")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Geografia - 6ºano")
        ).toBeInTheDocument();

    });

    test("deve abrir popup ao clicar em Geografia", async () => {

    const user = userEvent.setup();

    render(<Pmenu />);

    await user.click(
        screen.getByText("Geografia - 6ºano")
    );

    expect(
        screen.getByText("Escolha quantos times deseja:")
    ).toBeInTheDocument();

});

test("deve enviar team = 2", async () => {

    const user = userEvent.setup();

    render(<Pmenu />);

    await user.click(
        screen.getByText("Geografia - 6ºano")
    );

    await user.click(
        screen.getByText("2 Times")
    );

    expect(
        screen.getByText("Team 2")
    ).toBeInTheDocument();

});

test("deve enviar team = 4", async () => {

    const user = userEvent.setup();

    render(<Pmenu />);

    await user.click(
        screen.getByText("Geografia - 6ºano")
    );

    await user.click(
        screen.getByText("4 Times")
    );

    expect(
        screen.getByText("Team 4")
    ).toBeInTheDocument();

});

});
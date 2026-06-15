import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";
import PQuiz from "./Pquiz";

// =======================
// Mocks
// =======================

vi.mock("../components/countcard", () => ({
  default: ({ equipe }: any) => <div>{equipe}</div>,
}));

vi.mock("../components/allpoups", () => ({
  default: () => <div>Poups Mock</div>,
}));

vi.mock("../components/save", () => ({
  Save: vi.fn(),
}));

// =======================
// Dados de teste
// =======================

const perguntas = [
  {
    palavra: "BRASIL",
    dica: "Maior país da América do Sul",
    tema: "Geografia",
    imagem: "teste.png",
  },
];

const props = {
  team: 2,
  perguntas,
  img: "img.png",
  setPage: vi.fn(),
};

// =======================
// Testes
// =======================

describe("PQuiz", () => {
  test("deve renderizar o tema", () => {
    render(<PQuiz {...props} />);

    expect(screen.getByText("Geografia")).toBeInTheDocument();
  });

  test("deve mostrar equipes azul e amarela", () => {
    render(<PQuiz {...props} />);

    expect(screen.getByText("Equipe Azul")).toBeInTheDocument();
    expect(screen.getByText("Equipe Amarela")).toBeInTheDocument();
  });

  test("não deve renderizar equipes vermelha e verde quando team = 2", () => {
    render(<PQuiz {...props} />);

    expect(screen.queryByText("Equipe Vermelha")).not.toBeInTheDocument();
    expect(screen.queryByText("Equipe Verde")).not.toBeInTheDocument();
  });

  test("deve renderizar quatro equipes quando team = 4", () => {
    render(<PQuiz {...props} team={4} />);

    expect(screen.getByText("Equipe Azul")).toBeInTheDocument();
    expect(screen.getByText("Equipe Amarela")).toBeInTheDocument();
    expect(screen.getByText("Equipe Vermelha")).toBeInTheDocument();
    expect(screen.getByText("Equipe Verde")).toBeInTheDocument();
  });

  test("deve iniciar no modo letra", () => {
    render(<PQuiz {...props} />);

    expect(
      screen.getByPlaceholderText("Digite uma letra")
    ).toBeInTheDocument();
  });

  test("deve alternar para modo palavra", async () => {
    const user = userEvent.setup();

    render(<PQuiz {...props} />);

    await user.click(screen.getByText("Letra"));

    expect(
      screen.getByPlaceholderText("Digite uma palavra")
    ).toBeInTheDocument();
  });

  test("deve permitir digitar uma letra", async () => {
    const user = userEvent.setup();

    render(<PQuiz {...props} />);

    const input = screen.getByPlaceholderText(
      "Digite uma letra"
    ) as HTMLInputElement;

    await user.type(input, "B");

    expect(input).toHaveValue("B");
  });

  test("deve exibir a imagem da pergunta", () => {
    render(<PQuiz {...props} />);

    expect(screen.getByRole("img")).toHaveAttribute("src", "teste.png");
  });

  test("deve iniciar com a dica desativada", () => {
    render(<PQuiz {...props} />);

    expect(screen.getByText("Dica desativada")).toBeInTheDocument();
  });
});
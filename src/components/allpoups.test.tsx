import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import AllPoups from "./allpoups";


vi.mock("../components/poup", () => ({
  default: ({ show, titulo, f1, close }: any) => {
    if (!show) return null;

    return (
      <div>
        <div>{titulo}</div>
        {f1 && <button onClick={f1}>action</button>}
        <button onClick={close}>close</button>
      </div>
    );
  },
}));

const baseProps: any = {
  img: "img.png",
  fase: 0,
  frases: [{ palavra: "CASA", dica: "teste", tema: "teste" }],

  turma: [{ nome: "Aluno 1" }],

  // 🔴 IMPORTANTE: só 1 popup por teste
  poupacerto: false,
  pouperro: false,
  poupdica: false,
  poupsword: true, // <- único ativo

  poupduvidas: false,
  poupimg: false,
  poupsorteio: false,
  poupconfig: false,
  poupback: false,

  setPoupAcerto: vi.fn(),
  setPoupErro: vi.fn(),
  setPoupDica: vi.fn(),
  setPoupSWord: vi.fn(),
  setPoupDuvidas: vi.fn(),
  setPoupImg: vi.fn(),
  setPoupSorteio: vi.fn(),
  setPoupConfig: vi.fn(),
  setPoupBack: vi.fn(),
  setPoupSobre: vi.fn(),

  setComplete: vi.fn(),
  complete: [],

  setPtBlue: vi.fn(),
  setPtYellow: vi.fn(),
  setPtRed: vi.fn(),
  setPtGreen: vi.fn(),

  setEnerB: vi.fn(),
  setEnerY: vi.fn(),
  setEnerR: vi.fn(),
  setEnerP: vi.fn(),

  setHelp: vi.fn(),
  setDisableDica: vi.fn(),

  setErroB: vi.fn(),
  setErroY: vi.fn(),
  setErroR: vi.fn(),
  setErroP: vi.fn(),

  setArrayErro: vi.fn(),
  setArrayAcerto: vi.fn(),

  setAlertErro: vi.fn(),
  setAlertAcerto: vi.fn(),

  setPage: vi.fn(),

  sorteio: "A",
  sortear: vi.fn(),

  erro: ["ERRO TESTE"],

  team: 1,
};

describe("popup isolado", () => {
  it("revela palavra corretamente", () => {
    const setComplete = vi.fn();

    render(<AllPoups {...baseProps} setComplete={setComplete} complete={[]} />);

    fireEvent.click(screen.getByText("action"));

    expect(setComplete).toHaveBeenCalledTimes(1);
  });
});
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";
import Poup from "./poup";

describe("Poup", () => {
  const props = {
    titulo: "Título",
    descricao: <p>Descrição do popup</p>,
    show: true,
    modo: "info" as const,
    close: vi.fn(),
  };

  test("deve renderizar título", () => {
    render(<Poup {...props} />);

    expect(screen.getByText("Título")).toBeInTheDocument();
  });

  test("deve renderizar descrição", () => {
    render(<Poup {...props} />);

    expect(screen.getByText("Descrição do popup")).toBeInTheDocument();
  });

  test("não deve renderizar quando show=false", () => {
    render(<Poup {...props} show={false} />);

    expect(screen.queryByText("Título")).not.toBeInTheDocument();
  });

  test("deve chamar close ao clicar no botão fechar", async () => {
    const user = userEvent.setup();

    render(<Poup {...props} />);

    const closeIcon = document.querySelector("svg");

    expect(closeIcon).not.toBeNull();

    await user.click(closeIcon!);

    expect(props.close).toHaveBeenCalledTimes(1);
  });

  test("não deve renderizar botões quando modo='info'", () => {
    render(<Poup {...props} />);

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  describe("Modo confirma", () => {
    test("deve renderizar botões Sim e Não", () => {
      render(
        <Poup
          {...props}
          modo="confirma"
          f1={vi.fn()}
          f2={vi.fn()}
        />
      );

      expect(screen.getByText("Sim")).toBeInTheDocument();
      expect(screen.getByText("Não")).toBeInTheDocument();
    });

    test("deve chamar f1 ao clicar em Sim", async () => {
      const user = userEvent.setup();

      const f1 = vi.fn();

      render(
        <Poup
          {...props}
          modo="confirma"
          f1={f1}
          f2={vi.fn()}
        />
      );

      await user.click(screen.getByText("Sim"));

      expect(f1).toHaveBeenCalledTimes(1);
    });

    test("deve chamar f2 ao clicar em Não", async () => {
      const user = userEvent.setup();

      const f2 = vi.fn();

      render(
        <Poup
          {...props}
          modo="confirma"
          f1={vi.fn()}
          f2={f2}
        />
      );

      await user.click(screen.getByText("Não"));

      expect(f2).toHaveBeenCalledTimes(1);
    });
  });

  describe("Modo time com 4 botões", () => {
    test("deve renderizar Azul e Amarela", () => {
      render(
        <Poup
          {...props}
          modo="time"
          qtdbtn={4}
          team={2}
        />
      );

      expect(screen.getByText("Azul")).toBeInTheDocument();
      expect(screen.getByText("Amarela")).toBeInTheDocument();

      expect(screen.queryByText("Vermelha")).not.toBeInTheDocument();
      expect(screen.queryByText("Verde")).not.toBeInTheDocument();
    });

    test("deve renderizar Vermelha e Verde quando team>2", () => {
      render(
        <Poup
          {...props}
          modo="time"
          qtdbtn={4}
          team={4}
        />
      );

      expect(screen.getByText("Azul")).toBeInTheDocument();
      expect(screen.getByText("Amarela")).toBeInTheDocument();
      expect(screen.getByText("Vermelha")).toBeInTheDocument();
      expect(screen.getByText("Verde")).toBeInTheDocument();
    });

    test("deve chamar f1", async () => {
      const user = userEvent.setup();

      const f1 = vi.fn();

      render(
        <Poup
          {...props}
          modo="time"
          qtdbtn={4}
          team={2}
          f1={f1}
        />
      );

      await user.click(screen.getByText("Azul"));

      expect(f1).toHaveBeenCalled();
    });

    test("deve chamar f2", async () => {
      const user = userEvent.setup();

      const f2 = vi.fn();

      render(
        <Poup
          {...props}
          modo="time"
          qtdbtn={4}
          team={2}
          f2={f2}
        />
      );

      await user.click(screen.getByText("Amarela"));

      expect(f2).toHaveBeenCalled();
    });

    test("deve chamar f3", async () => {
      const user = userEvent.setup();

      const f3 = vi.fn();

      render(
        <Poup
          {...props}
          modo="time"
          qtdbtn={4}
          team={4}
          f3={f3}
        />
      );

      await user.click(screen.getByText("Vermelha"));

      expect(f3).toHaveBeenCalled();
    });

    test("deve chamar f4", async () => {
      const user = userEvent.setup();

      const f4 = vi.fn();

      render(
        <Poup
          {...props}
          modo="time"
          qtdbtn={4}
          team={4}
          f4={f4}
        />
      );

      await user.click(screen.getByText("Verde"));

      expect(f4).toHaveBeenCalled();
    });
  });

  describe("Modo time com 5 botões", () => {
    test("deve renderizar botão Livre", () => {
      render(
        <Poup
          {...props}
          modo="time"
          qtdbtn={5}
          team={4}
        />
      );

      expect(screen.getByText("Livre")).toBeInTheDocument();
    });

    test("deve chamar f5", async () => {
      const user = userEvent.setup();

      const f5 = vi.fn();

      render(
        <Poup
          {...props}
          modo="time"
          qtdbtn={5}
          team={4}
          f5={f5}
        />
      );

      await user.click(screen.getByText("Livre"));

      expect(f5).toHaveBeenCalledTimes(1);
    });
  });

  test("não deve renderizar botões quando qtdbtn não existir", () => {
    render(
      <Poup
        {...props}
        modo="time"
      />
    );

    expect(screen.queryByText("Azul")).not.toBeInTheDocument();
  });
});
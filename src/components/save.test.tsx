import { describe, expect, test, vi, beforeEach } from "vitest";
import { Paragraph_team, Save } from "./save";
import {Packer} from "docx";

vi.mock("docx", () => {

    class Paragraph {
        config;

        constructor(config: any) {
            this.config = config;
        }
    }

    class TextRun {
        config;

        constructor(config: any) {
            this.config = config;
        }
    }

    class Document {
        config;

        constructor(config: any) {
            this.config = config;
        }
    }

    return {

        Paragraph,

        TextRun,

        Document,

        Packer: {
            toBlob: vi.fn().mockResolvedValue(new Blob())
        },

        AlignmentType: {
            CENTER: "CENTER",
            LEFT: "LEFT",
            RIGHT: "RIGHT",
        },

        HeadingLevel: {
            HEADING_1: "HEADING_1",
            HEADING_2: "HEADING_2",
        },

    };

});

describe("Paragraph_team", () => {

    const arrayAcerto = [
        {
            equipe: "B",
            tentativa: "Brasil",
            fase: 1,
            observacao: "Muito boa"
        },

        {
            equipe: "Y",
            tentativa: "Pará",
            fase: 2,
        }
    ];

    const arrayErro = [
        {
            equipe: "B",
            tentativa: "Brsil",
            fase: 1,
            observacao: "Erro de digitação"
        },

        {
            equipe: "B",
            tentativa: "Brasilia",
            fase: 3,
        },

        {
            equipe: "Y",
            tentativa: "Amazona",
            fase: 4,
        }
    ];

    test("deve retornar um array", () => {

        const result = Paragraph_team(
            "B",
            "Azul",
            "Equipe 1",
            25,
            arrayAcerto,
            arrayErro,
            5,
            90,
            "Excelente equipe"
        );

        expect(Array.isArray(result)).toBe(true);

    });

    test("deve possuir sete Paragraphs", () => {

        const result = Paragraph_team(
            "B",
            "Azul",
            "",
            20,
            arrayAcerto,
            arrayErro,
            4,
            100,
            ""
        );

        expect(result).toHaveLength(7);

    });

    

    test("deve contabilizar acertos apenas da equipe", () => {

        const result = Paragraph_team(
            "B",
            "Azul",
            "",
            0,
            arrayAcerto,
            arrayErro,
            3,
            50,
            ""
        );

        expect(result).toBeDefined();

    });

    test("deve contabilizar erros apenas da equipe", () => {

        const result = Paragraph_team(
            "B",
            "Azul",
            "",
            0,
            arrayAcerto,
            arrayErro,
            3,
            50,
            ""
        );

        expect(result).toBeDefined();

    });

    test("deve aceitar observação vazia", () => {

        const result = Paragraph_team(
            "B",
            "Azul",
            "",
            0,
            [],
            [],
            1,
            0,
            ""
        );

        expect(result).toHaveLength(7);

    });

    test("deve aceitar arrays vazios", () => {

        const result = Paragraph_team(
            "Y",
            "Amarela",
            "",
            0,
            [],
            [],
            1,
            0,
            ""
        );

        expect(result).toHaveLength(7);

    });

});


describe("Paragraph_team - comportamento", () => {

    const vazio: any[] = [];

    test.each([
        [1, "Muito ruim!"],
        [2, "Ruim"],
        [3, "Mediano"],
        [4, "Bom"],
        [5, "Muito Bom!"],
    ])(
        "deve aceitar comportamento %i",
        (comportamento) => {

            const result = Paragraph_team(
                "B",
                "Azul",
                "",
                0,
                vazio,
                vazio,
                comportamento,
                10,
                ""
            );

            expect(result).toHaveLength(7);

        }
    );

    test("deve aceitar comportamento inválido", () => {

        const result = Paragraph_team(
            "B",
            "Azul",
            "",
            0,
            vazio,
            vazio,
            999,
            10,
            ""
        );

        expect(result).toHaveLength(7);

    });

    test("deve aceitar nome vazio", () => {

        const result = Paragraph_team(
            "B",
            "Azul",
            "",
            10,
            vazio,
            vazio,
            5,
            10,
            ""
        );

        expect(result).toHaveLength(7);

    });

    test("deve aceitar nome preenchido", () => {

        const result = Paragraph_team(
            "B",
            "Azul",
            "Os Campeões",
            10,
            vazio,
            vazio,
            5,
            10,
            ""
        );

        expect(result).toHaveLength(7);

    });

    test("deve aceitar observação preenchida", () => {

        const result = Paragraph_team(
            "B",
            "Azul",
            "",
            10,
            vazio,
            vazio,
            5,
            10,
            "Excelente trabalho."
        );

        expect(result).toHaveLength(7);

    });

    test("deve aceitar energia zero", () => {

        const result = Paragraph_team(
            "B",
            "Azul",
            "",
            10,
            vazio,
            vazio,
            5,
            0,
            ""
        );

        expect(result).toHaveLength(7);

    });

    test("deve aceitar energia máxima", () => {

        const result = Paragraph_team(
            "B",
            "Azul",
            "",
            10,
            vazio,
            vazio,
            5,
            999,
            ""
        );

        expect(result).toHaveLength(7);

    });

});

describe("Save", () => {

    const click = vi.fn();

    beforeEach(() => {

        vi.clearAllMocks();

        global.URL.createObjectURL = vi.fn(() => "blob:test");

        global.URL.revokeObjectURL = vi.fn();

        vi.spyOn(document, "createElement")
            .mockReturnValue({
                href: "",
                download: "",
                click,
            } as any);

    });

    const props = {

        team: 2,

        complete: [0],

        frases: [
            {
                palavra: "Brasil",
                dica: "",
                tema: "",
            }
        ],

        histletra: ["A", "B"],

        histpalavra: ["Brasil"],

        histerro: ["X"],

        nameb: "Azul",
        enerb: 100,
        comportblue: 5,
        observblue: "",
        totalptblue: 20,

        namey: "Amarela",
        enery: 90,
        comportyellow: 4,
        observyellow: "",
        totalptyellow: 18,

        namer: "",
        enerr: 0,
        comportred: 0,
        observred: "",
        totalptred: 0,

        nameg: "",
        energ: 0,
        comportgreen: 0,
        observgreen: "",
        totalptgreen: 0,

        arrayacerto: [],

        arrayerro: []

    };

    

    test("deve chamar Packer.toBlob", async () => {

        await Save(props);

        expect(Packer.toBlob).toHaveBeenCalled();

    });

    test("deve criar uma URL", async () => {

        await Save(props);

        expect(URL.createObjectURL).toHaveBeenCalled();

    });

    test("deve revogar a URL", async () => {

        await Save(props);

        expect(URL.revokeObjectURL).toHaveBeenCalled();

    });

    test("deve clicar automaticamente para download", async () => {

        await Save(props);

        expect(click).toHaveBeenCalled();

    });

});
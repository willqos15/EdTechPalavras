import ExcelJS from "exceljs";
import { useState } from 'react'
import { TiDelete } from "react-icons/ti";
import { useRef } from "react";




type Aluno = {
    nome: string;
}

interface PropClasses {
    turma: Aluno[];
    setTurma: React.Dispatch<React.SetStateAction<Aluno[]>>
}

export default function Classes({ turma, setTurma }: PropClasses) {

    const [arquivo, setArquivo] = useState<File | null>(null);

    const fileRef = useRef<HTMLInputElement | null>(null);

    async function lerExcel(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0]
        if (!file) return;

        const buffer = await file.arrayBuffer();
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.load(buffer);

        // 3. Pegar a primeira planilha
        const worksheet = workbook.worksheets[0];

        const json: Aluno[] = [];

        // 4. Converter linhas em JSON
        worksheet.eachRow((row, rowNumber) => {
            // ignora cabeçalho
            if (rowNumber === 1) return;

            const valor = row.getCell(1).value;
            if (typeof valor !== "string") return;

            json.push({
                nome: valor
            });
        });

        console.log(json)
        setTurma(json)
        setArquivo(e.target.files?.[0] ?? null)
    }




    return (<>

        <div className="flex flex-col justify-center items-center">
            <p>Importar alunos/participantes.</p>

            <div className="flex flex-col items-start justify-start bg-gray-100 p-2">
                <p>Requisitos:</p>
                <p>- O arquivo deve estar em formato Excel (.xlsx) </p>
                <p>- Deve existir uma coluna chamada nome.</p>
            </div>

            <div className="flex flex-row gap-2 items-center justify-center mt-4">

                <label
                    htmlFor="arquivo"
                    className="flex cursor-pointer
             bg-(--asecondary) text-white transition-transform hover:scale-95 px-3 py-1 rounded
              "
                >
                    {arquivo ? arquivo.name : "Escolha um arquivo"}
                </label>

                {arquivo &&
                    <TiDelete onClick={() => {
                        setTurma([])
                        setArquivo(null)
                          if (fileRef.current) {
    fileRef.current.value = "";
  }
                    }}
                        className=" text-red-500 cursor-pointer hover:text-red-800 text-3xl" />}


            </div>

            <input className="hidden" id="arquivo"   ref={fileRef}
                type="file" accept=".xlsx" onChange={(e) => lerExcel(e)}
            />

            {arquivo &&
                <>
                    <hr className='border mt-3 mb-2 w-full' />
                    <p> <strong>{turma.length} alunos:</strong>
                        {turma.length > 0 ? turma.map(x => ` ${x.nome}, `) : null}
                    </p>
                </>
            }
        </div>

    </>)
}
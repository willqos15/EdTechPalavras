export  function normalizar(texto: string) {
        return texto
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") // remove acentos
            .replace(/[\s-]/g, "")           // remove espaço e hífen
            .toUpperCase()
    }
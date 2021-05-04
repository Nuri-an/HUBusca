//Arquivo que fornece a tipagem dos objetos - Posts para a aplicação

export interface PropsPost {
    userId: number | undefined,
    id: number | undefined,
    title: string,
    body: string
}
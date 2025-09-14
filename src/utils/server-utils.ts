import "server-only";

export const serverSideFunction = () => {
    console.log(
        `use multiple libraries,
        use envorment variables,
        interact with a database,
        process confidential informations`
    )
    return "server result"
}
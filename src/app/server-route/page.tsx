import { serverSideFunction } from "@/utils/server-utils"

export default function serverRoute () {
    const result = serverSideFunction()
    return <>
        <h2>server route {result}</h2>
    </>
}
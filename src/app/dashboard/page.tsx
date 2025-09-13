import Link from "next/link";

export default function dashboard () {
    return <>
        <h2>this is dashboard page</h2>
        <p>here navigate to <Link href={"/"}>home</Link></p>
    </>
}
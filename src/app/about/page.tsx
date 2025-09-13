import Link from "next/link";

export default function about () {
    return (
      <>
        <h2>this is about page</h2>
        <div>
            <Link href={"/"}>go back home page</Link>
            
        </div>
      </>
    );
}
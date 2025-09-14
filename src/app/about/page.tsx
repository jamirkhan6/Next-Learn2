import Link from "next/link";
import { cookies } from "next/headers";

export default async function about () {
  const cookiesStore = await cookies();
  const theme = cookiesStore.get("theme")
  console.log(theme)
    return (
      <>
        <h2>this is about page</h2>
        <div>
            <Link href={"/"}>go back home page</Link>
            
        </div>
      </>
    );
}
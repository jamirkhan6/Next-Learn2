import { Author } from "./author";

type Post = {
    userId : number;
    id: number;
    title : string;
    body : string;
}

export default async function PostSequential () {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts : Post[] = await response.json();
    
    const filteredPost = posts.filter((post) => post.id % 10 === 1)

    return (
        <div className="p-4 max-w-7xl mx-auto">
            <h1 className="text-3xl font-extrabold mb-8 text-center">blog post</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredPost.map((post) => (
                    <div className="bg-white shadow-md rounded-lg p-6" key={post.id}>
                        <h2 className="text-2xl font-bold mb-3 text-gray-800 leading-tight">{post.title}</h2>
                        <p className="text-gray-500 leading-tight">{post.body}</p>
                        <Author userId={post.userId} />
                    </div>
                ))}
            </div>
        </div>
    )
}
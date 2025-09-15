

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Album = {
  userId: number;
  id: number;
  title: string;
};

async function getUserPosts (userId : string) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

    return response.json()
}
async function getUserAlbums (userId : string) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)

    return response.json()
}

export default async function UserProfile({params} : {params : Promise<{ id : string }>}) {
    const { id } = await params;

    const postsData = getUserPosts(id)
    const albumsData = getUserAlbums(id)

    const [posts, albums] = await Promise.all([postsData, albumsData])

    return (
      <div className="p-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center">user profile</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">posts</h2>
            <div className="space-y-4">
              {posts.map((post: Post) => (
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3 text-gray-700">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 mb-4">{post.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">albums</h2>
            <div className="space-y-4">
              {albums.map((album: Album) => (
                <div className="bg-white shadow-md rounded-lg p-6" key={album.id}>
                  <p className="text-gray-500 mb-4">{album.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}

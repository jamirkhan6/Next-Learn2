



type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UsersServer() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users : User[] = await response.json();
    
    return (
      <>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="flex gap-8 m-6">
              <p>id : {user.id}</p>
              <h2>name : {user.name}</h2>
              <p>email : {user.email}</p>
              <p>phone : {user.phone}</p>
            </li>
          ))}
        </ul>
      </>
    );
}


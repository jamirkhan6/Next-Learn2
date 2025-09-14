"use client"
import { useState, useEffect } from "react";

type User = {
    id : number;
    name : string;
    username : string;
    email : string;
    phone : string;
}

export default function UsersClient () {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch ("https://jsonplaceholder.typicode.com/users")
                if (!response.ok) throw new Error("failed to fetch data");
                const data = await response.json();
                setUsers(data)
            }
            catch (err) {
                if (err instanceof Error) {
                    setError(err.message)
                }
                else {
                    setError("an unknown error")
                }
            }
            finally {
                setLoading(false)
            }
        }
        fetchUsers();
    }, [])

    if (loading) return <p>loading...</p>
    if (error) return <p>{error}</p>

    return <>
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
}
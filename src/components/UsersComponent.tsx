import {getAllUsers} from "@/services/api.service";
import {IUser} from "@/models/IUser";
import Link from "next/link";

export const UsersComponent = async () => {
    const users: IUser[] = await getAllUsers()
    return (
        <div>
            {users.map((user: IUser) => (<div key={user.id}>
                <Link href={{pathname: `/users/${user.id}`, query: {data: JSON.stringify(user)} }}>{user.name}</Link>
            </div>))}
        </div>
    );
};
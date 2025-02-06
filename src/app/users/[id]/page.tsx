import {FC} from "react";
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";
import {IUser} from "@/models/IUser";

type Props = {
    params: Promise<{id: string}>,
    searchParams: Promise<SearchParams>
}

export const generateMetadata = async ({params}:Props): Promise<Metadata> => {
    const {id} = await params

    return {
        title: `User Page ${id}`
    }
}
const UserPage:FC<Props> = async ({searchParams}) => {
    // const {id} = await params
    const {data} = await searchParams
    let user: IUser | null = null
    if (typeof data === "string") {
        user = JSON.parse(data) as IUser
    }


    return (
        <div>
            {user && (
                <div>
                    {user.id} {user.name}
                </div>
            )}
        </div>
    );
};

export default UserPage;

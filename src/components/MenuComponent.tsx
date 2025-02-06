import Link from "next/link";

export const MenuComponent = () => {
    return (
        <>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                    <Link href="/users">Users</Link>
                </li>
            </ul>
        </>
    );
};
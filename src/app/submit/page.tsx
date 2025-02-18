import {FC} from "react";

type Props = {
    searchParams: Promise<{
        [key: string]: string | string[] | undefined
    }>;
}

const SubmitPage:FC<Props> = async ({searchParams}) => {
    const search = await searchParams

    /*fetch('/dfasdfas', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            key1: 'value1',
            key2: 'value2'
        })
    })*/

    return (
        <>
            this is page after submitting {search.name}
        </>
    )
}

export default SubmitPage;
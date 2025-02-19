import {NextRequest, NextResponse} from "next/server";

export const middleware = async (request: NextRequest) => {
    console.log('middleware');
    /*const login = request.cookies.get('login')
    const password = request.cookies.get('password')

    const token = fetch('/dfasdfas', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            key1: login,
            key2: password
        })
    }).then(value => value.json())*/

    /*const token = 'fadsfasfasdff23424324dfafadsfdasf'

    const response = NextResponse.next({
        headers: {
            Authorization: token
        }
    })

    return response*/

    /*return new NextResponse('body', {
        headers: {
            Authorization: 'token'
        }
    })*/

    /*if(request.url.startsWith('/api/')){
        // some action
    } else if(request.url.startsWith('/swapi/')){
        // some action
    }
    //Library Nemo*/
}

export const config = {
    matcher: '/auth/:path'
}
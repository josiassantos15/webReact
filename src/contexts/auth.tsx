import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

type User = {
    id: string;
    name: string;
    login: string;
    avatar_url: string;
}

type AuthContextData = {
    user: User | null;
    signInUrl: string;
    signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextData)

type AuthProvider = {
    children: ReactNode;
}

type AuthResponse = {
    token: string;
    user: {
        id: string;
        name: string;
        login: string;
        avatar_url: string;
    }
}

export function AuthProvider(props: AuthProvider) {
    const [user, setUser] = useState<User | null>(null)
    
    const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=a86aff286acc99288291`;
    
    async function signIn(githubCode: string) {
        const response = await api.post<AuthResponse>('authenticate', {
            code: githubCode,
        })
        // Salvar o token no local storage do navegador por um tempo
        const { token, user } = response.data

        localStorage.setItem('@dowhile:token', token)

        api.defaults.headers.common.authorization = `Bearer ${token}`;
        
        setUser(user) 
    }
    // Função de LogOut do usuário
    function signOut() {
        setUser(null)
        localStorage.removeItem('@dowhile:token')
    }
    // Pegar token armazenado no local estore do navegador
    useEffect(() => {
        const token = localStorage.getItem('@dowhile:token')

        if (token) { //Trazendo o token no cabeçalho da requisição
            api.defaults.headers.common.authorization = `Bearer ${token}`;

            api.get<User>('profile').then(response => {
                setUser(response.data)
            })
        }
    }, [])

    useEffect(() => {
        const url = window.location.href;
        const hasGithubCode = url.includes('?code=');
        
        if (hasGithubCode) {
            const [urlWithoutCode, githubCode] = url.split('?code=')
            // Removendo o código da URL
            window.history.pushState({}, '', urlWithoutCode)

            signIn(githubCode)
        }
    }, [])

    return (
        <AuthContext.Provider value={{ signInUrl, user, signOut }}>
            {props.children}
        </AuthContext.Provider>
    )
}

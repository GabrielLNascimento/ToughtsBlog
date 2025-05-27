import { useState } from 'react';

import { auth } from '../assets/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (evt) => {
        evt.preventDefault();

        if(!email || !senha) return

        try {
            await signInWithEmailAndPassword(auth, email, senha);
            navigate('/');
        } catch {
            console.log('Erro ao logar');
        }
    };

    return (
        <div className="bg-orange-100 border border-slate-700 w-full max-w-lg m-auto px-10 py-5 mt-10 rounded-xl">
            <h2 className="text-center text-3xl font-bold mb-5">
                Entre com sua conta
            </h2>
            <form className="flex flex-col gap-3">
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-b-1 border-slate-500 px-2 py-1 hover:outline cursor-pointer"
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    onChange={(e) => setSenha(e.target.value)}
                    className="border-b-1 border-slate-500 px-2 py-1 hover:outline cursor-pointer"
                    required
                />
                <button
                    onClick={handleLogin}
                    className="bg-slate-900 px-4 text-white py-1 flex justify-center w-fit cursor-pointer hover:bg-slate-950"
                >
                    Entrar
                </button>
                <p>
                    Não tem conta?{' '}
                    <Link to="/register">
                        <span className="text-sky-900 hover:underline">
                            Registrar
                        </span>
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;

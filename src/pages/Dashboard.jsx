import { useState } from 'react';

import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db, auth } from '../assets/firebase';

const Dashboard = () => {
    const [titulo, setTitulo] = useState('');
    const [desc, setDesc] = useState('');

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const user = auth.currentUser;

        try {
            await addDoc(collection(db, 'posts'), {
                titulo,
                desc,
                autor: user.displayName,
                criadoEm: Timestamp.now(),
            });

            setTitulo('');
            setDesc('');
            alert('Post criado com sucesso');
        } catch (err) {
            console.log('Erro ao criar um post', err);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-orange-100 border border-slate-700 w-full max-w-lg m-auto px-10 py-5 mt-10 rounded-xl flex flex-col gap-3"
        >
            <h2 className="text-center text-3xl font-bold mb-5">Criar Post</h2>
            <input
                type="text"
                placeholder="Título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
                className="border-b-1 border-slate-500 px-2 py-1 hover:outline cursor-pointer"
            />
            <br />
            <textarea
                placeholder="Descrição"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                required
                className="border-b-1 border-slate-500 px-2 py-1 hover:outline cursor-pointer"
            />
            <br />
            <button type="submit">Postar</button>
        </form>
    );
};

export default Dashboard;

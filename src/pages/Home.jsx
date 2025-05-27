import { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../assets/firebase';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const buscarPosts = async () => {
        const q = query(collection(db, 'posts'), orderBy('criadoEm', 'desc'));
        const querySnapshot = await getDocs(q);
        const lista = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setPosts(lista);
        setLoading(false);
    };

    useEffect(() => {
        buscarPosts();
    }, []);

    {
        loading && <p>Carregando posts...</p>;
    }

    return (
        <div>
            <h2 className="text-center text-4xl font-bold my-5 text-white">
                Veja os nossos Posts
            </h2>

            {posts.map((post) => (
                <div
                    key={post.id}
                    className="border-orange-950 border-4 bg-orange-800 text-white w-2xl p-5 shadow-xl m-auto mb-10"
                >
                    <h3 className='font-bold text-3xl '>{post.titulo}</h3>
                    <p className='text-2xl italic'>{post.desc}</p>
                    <small className='text-lg'>Criado por: {post.autor}</small>
                </div>
            ))}
        </div>
    );
};

export default Home;

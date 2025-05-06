import './home.css'
import HomeSection from '../../components/HomeSection/index';
import { AbCard } from 'ds-alurabooks-chiqueto';

export default function Home() {
    return (
        <>
            <HomeSection />
            <section className="newsSection">
                <h1> ÚLTIMOS LANÇAMENTOS </h1>
                <div>
                    <div className='books '>
                        <img src="livro1.png" alt="Livro 1" />
                        <img src="livro2.png" alt="Livro 2" />
                        <img src="livro3.png" alt="Livro 3" />
                    </div>
                    <div className='bookCard'>
                        <AbCard key={1}>
                            <div className='cardHeader'>
                                <p>Sobre o livro:</p>
                                <div>
                                    <img src="sacola.svg" alt="Sacola" />
                                    <img src="favoritos.svg" alt="Favoritos" />
                                </div>
                            </div>
                        </AbCard>
                    </div>
                </div>
            </section>
        </>

    );
}
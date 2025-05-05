export default function HomeSection () {
    return(
        <section className="homeSection">
            <img src='leftImage.svg' alt='' className='left' />
            <img src='rightImage.svg' alt='' className='right' />
            <div >
                <h1>Já sabe por onde começar?</h1>
                <p>Encontre em nossa estante o que precisa para seu desenvolvimento!</p>
                <input type="text" placeholder="Qual será sua próxima leitura?" />
            </div>
        </section>
    )
} 
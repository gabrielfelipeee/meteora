import './styles.scss';

import pix from '../../assets/x-diamond.svg';
import arrowRepeat from '../../assets/arrow-repeat.svg';
import flower from '../../assets/flower.svg';





const Footer = () => {
    const itensFooter = [
        {
            image: pix,
            title: "PAGUE PELO PIX",
            description: "Ganhe 5% OFF em pagamentos via PIX"
        },
        {
            image: arrowRepeat,
            title: "TROCA GRÁTIS",
            description: "Fique livre para trocar em até 30 dias."
        },
        {
            image: flower,
            title: "SUSTENTABILIDADE",
            description: "Moda responsável, que respeita o meio ambiente."
        }
    ];


    return (
        <footer className="box-footer">
            <section className="info">
            <h2>Conheça todas as nossas facilidades</h2>
                <ol>
                    {
                        itensFooter.map(item =>
                            <li key={item.title}>
                                <img src={item.image} alt={`Logo do ${item.title}.`} />
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </li>
                        )
                    }
                </ol>
            </section>
            <section className="news">
                <p>
                    Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!
                </p>
                <form>
                    <input
                        type="email"
                        placeholder="Digite seu email"

                    />
                    <input
                        type="submit"
                        value="Enviar"
                    />
                </form>
            </section>
            <div className="credits">
                Design por Alura | Desenvolvido por
                <a href="https://gabrielfelipe.vercel.app" target='_blank'> Gabriel Felipe
                </a>
                <span>Projeto fictício sem fins comerciais.</span>
            </div>
        </footer>
    )
}
export default Footer;

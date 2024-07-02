import styles from './NotFound.module.scss';
import erro404 from './404.png';
import { useNavigate } from 'react-router-dom';
import Botao from 'components/Btn';

export default function NotFound() {

    const navegar = useNavigate ();

    return (
        <section className={styles.erro}>
            <img src={erro404} alt="imagem da pagina de erro" />
            <div>
                <h1>Ops... Página não encontrada... Clique em voltar!</h1>
                <div onClick={() => navegar(-1)}>
                    <Botao>VOLTAR</Botao>
                </div>
            </div>
        </section>
    )
}

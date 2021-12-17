import { useContext } from 'react';
import { VscGithubInverted } from 'react-icons/vsc'
import { AuthContext } from '../../contexts/auth';

import styles from './styles.module.scss';

const dadosArray =[
    {treinamento: 'nr10', 
    pessoasTreinadas: [
        {id: '01', nome: 'Ana Maria', instituicao: 'BELA'}, 
        {id: '02', nome: 'Ana Maria2', instituicao: 'Petruz'},
        {id: '03', nome: 'Ana Maria3', instituicao: 'BELA'},
        {id: '04', nome: 'Ana Maria4', instituicao: 'Petruz'},
        {id: '05', nome: 'Ana Maria5', instituicao: 'Fortaleza'},
        {id: '06', nome: 'Ana Maria6', instituicao: 'BELA'}
    ]
},
{treinamento: 'nr33', 
    pessoasTreinadas: [
        {id: '01', nome: 'Ana Maria', instituicao: 'BELA'}, 
        {id: '02', nome: 'Ana Maria2', instituicao: 'Petruz'},
        {id: '03', nome: 'Ana Maria3', instituicao: 'BELA'},
        {id: '04', nome: 'Ana Maria4', instituicao: 'Petruz'},
        {id: '05', nome: 'Ana Maria5', instituicao: 'Fortaleza'},
        {id: '06', nome: 'Ana Maria6', instituicao: 'BELA'}
    ]
},
{treinamento: 'nr35', 
    pessoasTreinadas: [
        {id: '01', nome: 'Ana Maria', instituicao: 'BELA'}, 
        {id: '02', nome: 'Ana Maria2', instituicao: 'Petruz'},
        {id: '03', nome: 'Ana Maria3', instituicao: 'BELA'},
        {id: '04', nome: 'Ana Maria4', instituicao: 'Petruz'},
        {id: '05', nome: 'Ana Maria5', instituicao: 'Fortaleza'},
        {id: '06', nome: 'Ana Maria6', instituicao: 'BELA'}
    ]
},
{treinamento: 'código de ética Petruz', 
    pessoasTreinadas: [
        {id: '01', nome: 'Ana Maria', instituicao: 'BELA'}, 
        {id: '02', nome: 'Ana Maria2', instituicao: 'Petruz'},
        {id: '03', nome: 'Ana Maria3', instituicao: 'BELA'},
        {id: '04', nome: 'Ana Maria4', instituicao: 'Petruz'},
        {id: '05', nome: 'Ana Maria5', instituicao: 'Fortaleza'},
        {id: '06', nome: 'Ana Maria6', instituicao: 'BELA'}
    ]
}
]
// const arrayPessoas = dadosArray.map(base => base.pessoasTreinadas)
// const arrayBase = dadosArray.filter(b => b.pessoasTreinadas[0].instituicao[0])

export function Page() {
    const { signInUrl } = useContext(AuthContext);

    return(
        <div className={styles.PageBoxWrapper}>
            <strong>
                <table>
                    <tr>
                    <th scope="col">Treinamento</th>
                    <th scope="col">Bela</th>
                    <th scope="col">Petruz</th>
                    <th scope="col">Fortaleza</th>
                    <th scope="col">Total</th>       
                    </tr>
                
                    <tbody>
                        <td scope="col">fados</td>
                    </tbody>
                </table>
            </strong>
            <a href={signInUrl} className={styles.signInWithGithub}>
                <VscGithubInverted size="24" />
                Entrar com o Github
            </a>
        </div>
    )
}
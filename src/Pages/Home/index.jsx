import './styles.css';
import { Plus, Trash } from 'phosphor-react';
import { CardUser } from '../../components/CardUser'

export function Home() {
    return (
        <div className="container">
            <h1>Lista de alunos do curso</h1>
            <div className="input-container">
                <input type="text" placeholder="Nome do Aluno"/>
                <button title="Adicionar Aluno">
                    <Plus size={26} weight="bold" color='#FFF'/>
                </button>
            </div>
            <div className="container-list">
                <CardUser name="Carlos"/>
                <CardUser name="Leticia"/>
                <CardUser name="Lucas"/>
            </div>
        </div>
    )
}
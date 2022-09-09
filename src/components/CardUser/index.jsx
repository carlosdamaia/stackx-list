import { Plus, Trash } from 'phosphor-react';
import './styles.css'

export function CardUser(props) {

    function deleteUser(idUser){
        props.onDeleteStudent(idUser);
    }

    return(
        <div className='container-card'>
            <p>{props.name}</p>
            <button onClick={() => deleteUser(props.idStudent)}>
                <Trash size={32} weight="bold" color='#FFF' />
            </button>
        </div>
    );
}
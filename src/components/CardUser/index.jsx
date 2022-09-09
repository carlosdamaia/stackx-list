import { Plus, Trash } from 'phosphor-react';
import './styles.css'

export function CardUser(props) {
    return(
        <div className='container-card'>
            <p>{props.name}</p>
            <button>
                <Trash size={32} weight="bold" color='#FFF' />
            </button>
        </div>
    );
}
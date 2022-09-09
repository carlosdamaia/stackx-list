import { useState } from 'react';
import './styles.css';
import { Plus, Trash } from 'phosphor-react';
import { CardUser } from '../../components/CardUser'

export function Home() {
    const [studentName, setStudentName] = useState('');
    const [students, setStudents] = useState([])


    function handleAddStudent() {
        const newStudent = {
            name: studentName,
        }

        setStudents(prevState => [...prevState, newStudent]);

        setStudentName('');
    }

    function handleRemoveStudent(idStudent) {
        setStudents(students.filter((e, index) => index !== idStudent));
    }

    return (
        <div className="container">
            <h1>Lista de alunos do curso</h1>
            <div className="input-container">
                <input 
                    type="text" 
                    placeholder="Nome do Aluno"
                    onChange={e => setStudentName(e.target.value)}
                    value={studentName}    
                />
                <button title="Adicionar Aluno" onClick={handleAddStudent}>
                    <Plus size={26} weight="bold" color='#FFF'/>
                </button>
            </div>
            <div className="container-list">
                {
                    students.map((student, index) => 
                        <CardUser key={index} 
                        name={student.name} 
                        idStudent={index} 
                        onDeleteStudent={handleRemoveStudent} />
                    )
                }
            </div>
        </div>
    )
}
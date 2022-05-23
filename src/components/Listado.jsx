import React from 'react'
import {Pacientes} from './Pacientes'


export const Listado = ({pacientes, setPaciente, eliminarPaciente}) => {
    

    return (
        <div className='bg-gray-800 rounded-2xl p-4 w-auto shadow-xl mx-10 md:w-auto lg:w-auto lg:mx-5 xl:w-auto xl:mr-20 overflow-y-auto'>
            <div>
                <h2 className='text-3xl text-center text-blue-400 font-bold'>Listado Pacientes</h2>
                <p className='text-center text-xl mt-5 text-gray-400'>Administra tus <span className=' text-blue-100 font-bold'> Pacientes y Citas </span></p>
                {
                    pacientes.map(paciente =>(
                        <Pacientes
                        key={paciente.id}
                        paciente = {paciente}
                        setPaciente = {setPaciente}
                        eliminarPaciente = {eliminarPaciente}
                        />
                    ))
                }
                
                
            </div>
        </div>
    )
}

export default Listado
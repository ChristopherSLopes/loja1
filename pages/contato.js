import React from 'react';
import PageTitle from './components/PageTitle'

const Contato = () => {
    return(
        <div>
            <PageTitle title='Contato'/>
            <h1 className='titulo'>Contato</h1>
            <p>Endereço: Avenida Brasil, 10000, Centro de Foz do Iguaçu/PR - CEP 85851-000</p>
            <h2>Qualquer duvida, entre em contato</h2>
            <p>Instagram</p>
            <p>WhatsApp: (45) 0000-0000</p>
        </div>
    )
}

export default Contato;
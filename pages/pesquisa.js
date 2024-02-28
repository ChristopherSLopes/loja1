import React, {useState} from 'react';
import PageTitle from './components/PageTitle'

const Pesquisa = () => {
    const [botaoDesabilitado, setBotaoDesabilitado] = useState(false);
    const [ form, setForm ] = useState({ //Apenas colocaos o formulario em um useState
        Nome : '',
        Whatsapp : '',
        Atendimento: '',
        Localizacao: '',
        Estacionamento: '',
        Limpeza: '',
        Pagamento: '',
        Variedade: '',
        Qualidade: '',
        Preco: ''
    })
    const [ sucess, setSuccess ] = useState(false)
    const [ retorno, setRetorno ] = useState({})
    const save = async () =>{
        setBotaoDesabilitado(true);
        try{
            const response = await fetch('/api/save', { //O response é a resposta do fetch, o fetch sempre retorna uma resposta.
                method: 'POST',
                body: JSON.stringify(form)
            }) //para enviar
            const data = await response.json() //data pega os dados como json. Talbem como processo assima.
            setSuccess(true)
            setRetorno(data)
        } catch(err) {
            console.log(err);
        }
    }
    const onChange = evt =>{
        const value = evt.target.value  //Como é um evento sintetico,
        const key = evt.target.name 
        setForm(old => ({
            ...old, //Pega as informações antigas.
            [key] : value
        }))
    }
    return(
        <div>
            <PageTitle title='Pesquisa'/>
            <h1 className='titulo'>Criticas e sugestões</h1>
            <p>
                Estamos sempre abertos para ouvir você.
            </p>
            { !sucess && <div className='form'>
                <label className='label'>Seu Nome:</label>
                <input type='text' className='input' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome}/>
                <label className='label'>Whatsapp:</label>
                <input type='tel' className='input' placeholder='Whatsapp' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={onChange} name='Whatsapp' value={form.Whatsapp}/>
                
                <h2 className='titulo-pesquisa'>Conte o que acha</h2>
            
                <div className='boxescolha'>
                    <label className='label escolha'>1- Atendimento?</label><br/>
                    <div className='boxOpcoes'>
                        <label className='opcoes'><input type='radio' name='Atendimento' value={5} onChange={onChange}/>Muito Bom</label><br/>
                        <label className='opcoes'><input type='radio' name='Atendimento' value={4} onChange={onChange}/>Bom</label><br/>
                        <label className='opcoes'><input type='radio' name='Atendimento' value={3} onChange={onChange}/>Regular</label><br/>
                        <label className='opcoes'><input type='radio' name='Atendimento' value={2} onChange={onChange}/>Ruim</label><br/>
                        <label className='opcoes'><input type='radio' name='Atendimento' value={1} onChange={onChange}/>Muito Ruim</label><br/>
                    </div>
                </div>
                
                <div className='boxescolha'>
                    <label className='label escolha'>2- Localização?</label><br/>
                    <div className='boxOpcoes'>
                        <label className='opcoes'><input type='radio' name='Localizacao' value={5} onChange={onChange}/>Muito Bom</label><br/>
                        <label className='opcoes'><input type='radio' name='Localizacao' value={4} onChange={onChange}/>Bom</label><br/>
                        <label className='opcoes'><input type='radio' name='Localizacao' value={3} onChange={onChange}/>Regular</label><br/>
                        <label className='opcoes'><input type='radio' name='Localizacao' value={2} onChange={onChange}/>Ruim</label><br/>
                        <label className='opcoes'><input type='radio' name='Localizacao' value={1} onChange={onChange}/>Muito Ruim</label><br/>
                    </div>
                </div>
                
                <div className='boxescolha'>
                    <label className='label escolha'>3- Estacionamento?</label><br/>
                    <div className='boxOpcoes'>
                        <label className='opcoes'><input type='radio' name='Estacionamento' value={5} onChange={onChange}/>Muito Bom</label><br/>
                        <label className='opcoes'><input type='radio' name='Estacionamento' value={4} onChange={onChange}/>Bom</label><br/>
                        <label className='opcoes'><input type='radio' name='Estacionamento' value={3} onChange={onChange}/>Regular</label><br/>
                        <label className='opcoes'><input type='radio' name='Estacionamento' value={2} onChange={onChange}/>Ruim</label><br/>
                        <label className='opcoes'><input type='radio' name='Estacionamento' value={1} onChange={onChange}/>Muito Ruim</label><br/>
                    </div>
                </div>
                
                <div className='boxescolha'>
                <label className='label escolha'>4- Limpeza?</label><br/>
                    <div className='boxOpcoes'>
                        <label className='opcoes'><input type='radio' name='Limpeza' value={5} onChange={onChange}/>Muito Bom</label><br/>
                        <label className='opcoes'><input type='radio' name='Limpeza' value={4} onChange={onChange}/>Bom</label><br/>
                        <label className='opcoes'><input type='radio' name='Limpeza' value={3} onChange={onChange}/>Regular</label><br/>
                        <label className='opcoes'><input type='radio' name='Limpeza' value={2} onChange={onChange}/>Ruim</label><br/>
                        <label className='opcoes'><input type='radio' name='Limpeza' value={1} onChange={onChange}/>Muito Ruim</label><br/>
                    </div>
                </div>
                
                <div className='boxescolha'>
                    <label className='label escolha'>5- Formas de pagamento?</label><br/>
                    <div className='boxOpcoes'>
                        <label className='opcoes'><input type='radio' name='Pagamento' value={5} onChange={onChange}/>Muito Bom</label><br/>
                        <label className='opcoes'><input type='radio' name='Pagamento' value={4} onChange={onChange}/>Bom</label><br/>
                        <label className='opcoes'><input type='radio' name='Pagamento' value={3} onChange={onChange}/>Regular</label><br/>
                        <label className='opcoes'><input type='radio' name='Pagamento' value={2} onChange={onChange}/>Ruim</label><br/>
                        <label className='opcoes'><input type='radio' name='Pagamento' value={1} onChange={onChange}/>Muito Ruim</label><br/>
                    </div>
                </div>
                
                <div className='boxescolha'>
                    <label className='label escolha'>6- Variedade das peças?</label><br/>
                    <div className='boxOpcoes'>
                        <label className='opcoes'><input type='radio' name='Variedade' value={5} onChange={onChange}/>Muito Bom</label><br/>
                        <label className='opcoes'><input type='radio' name='Variedade' value={4} onChange={onChange}/>Bom</label><br/>
                        <label className='opcoes'><input type='radio' name='Variedade' value={3} onChange={onChange}/>Regular</label><br/>
                        <label className='opcoes'><input type='radio' name='Variedade' value={2} onChange={onChange}/>Ruim</label><br/>
                        <label className='opcoes'><input type='radio' name='Variedade' value={1} onChange={onChange}/>Muito Ruim</label><br/>
                    </div>
                </div>
                
                <div className='boxescolha'>
                    <label className='label escolha'>7- Qualidade das peças?</label><br/>
                    <div className='boxOpcoes'>
                        <label className='opcoes'><input type='radio' name='Qualidade' value={5} onChange={onChange}/>Muito Bom</label><br/>
                        <label className='opcoes'><input type='radio' name='Qualidade' value={4} onChange={onChange}/>Bom</label><br/>
                        <label className='opcoes'><input type='radio' name='Qualidade' value={3} onChange={onChange}/>Regular</label><br/>
                        <label className='opcoes'><input type='radio' name='Qualidade' value={2} onChange={onChange}/>Ruim</label><br/>
                        <label className='opcoes'><input type='radio' name='Qualidade' value={1} onChange={onChange}/>Muito Ruim</label><br/>
                    </div>
                </div>

                <div className='boxescolha'>
                    <label className='label escolha'>8- Preço?</label><br/>
                    <div className='boxOpcoes'>
                        <label className='opcoes'><input type='radio' name='Preco' value={5} onChange={onChange}/>Muito Bom</label><br/>
                        <label className='opcoes'><input type='radio' name='Preco' value={4} onChange={onChange}/>Bom</label><br/>
                        <label className='opcoes'><input type='radio' name='Preco' value={3} onChange={onChange}/>Regular</label><br/>
                        <label className='opcoes'><input type='radio' name='Preco' value={2} onChange={onChange}/>Ruim</label><br/>
                        <label className='opcoes'><input type='radio' name='Preco' value={1} onChange={onChange}/>Muito Ruim</label><br/>
                    </div>
                </div>


                <label className='label'>Tem alguma coisa que queira compartilhar?</label>
                <textarea className='comentario' cols='25' rows='5' onChange={onChange} name='Comentario' value={form.Comentario}></textarea>

                <button className='button' onClick={save} disabled={botaoDesabilitado}>Salvar</button>
    
            </div> /* se não tiver cupom ainda, mostra esse, se não, mostre o cupom*/}
            { sucess && <div className='div-cupom'> 
                <p className='cupom-blue'>Obrigado por contribuir com sua sugestão.</p>
                {
                    retorno.showCoupom && 
                    <div className='cupom-div'>
                        Seu Cupom:<br/>
                        <span className='text-cupom'>{retorno.Cupom}</span>
                    </div>
                }
                {/*cupom-blue  promocao-cupom   text-cupom*/
                    retorno.showCoupom && 
                    <div className='cupom-div'>
                        <span className='promocao-cupom'>{retorno.Promo}</span>
                        <br/>
                        <span>Tire um print ou foto desta tela na proxima compra.</span>
                    </div>
                }
            </div>}
        </div>
    )
}

export default Pesquisa;

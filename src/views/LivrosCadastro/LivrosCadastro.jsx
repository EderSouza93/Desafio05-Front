import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import "./index.scss"
import SubmenuLivros from '../../components/SubmenuLivros/SubmenuLivros'
import { LivrosService } from '../../api/LivrosService'
import { Toast } from '../../components/Notifications/Notifications'

const LivrosCadastro = () => {
  
  const [ livro, setLivro ] = useState( {} )
  const [ loading, setLoading ] = useState( false )
  const navigate = useNavigate()

  async function createLivro() {
    if ( !livro.titulo || livro.title === '' || livro.titulo === undefined ) {
      Toast.warning( 'Por favor, preencha o título do livro' )
      return
    }

    if ( !livro.num_paginas || livro.num_paginas === '' || livro.titulo === undefined ) {
      Toast.warning( 'Por favor, preencha o número de páginas')
      return
    }

    if ( !livro.isbn || livro.isbn === '' || livro.titulo === undefined ) {
      Toast.warning( 'Por favor, preencha o ISBN')
      return
    }

    if ( !livro.editora || livro.editora === '' || livro.titulo === undefined ) {
      Toast.warning( 'Por favor, preencha a editora')
      return
    }
    

    const body = {
        title:livro.titulo,
        pages: Number(livro.num_paginas),
        isbnCode: livro.isbn,
        publisher: livro.editora
    }

    setLoading(true)

    try {
      const response = await LivrosService.createLivro( body )
      
      const livroCreated = response.data
      const successMessage = `Livro "${livroCreated.title}" cadastrado com sucesso!`
      
      Toast.success( successMessage, {
        autoClose: 3000,
        onClose: () => {
          
          setTimeout( () => {
            navigate('/livros')
          }, 1000)
        }
      }) 
    } catch ( error ) {
      console.error('Erro completo:', error)
      console.error('Error.response:', error.response)
      
      const errorMessage = error.response?.data?.message || 'Erro desconhecido'
      const errorStatus = error.response?.status || 'Erro'

      Toast.error( `${ errorStatus } - ${ errorMessage }`, {
        autoClose: 5000
      } )
      
    } finally {
      setLoading(false)
    }
  }

  const limparFormulario = () => {
    document.getElementById( 'formulario' ).reset()
    setLivro( {} )
    Toast.info('Formulário limpo')
  }

  return (
  <>
    <Header/>    
    <SubmenuLivros/>
    <div className='livrosCadastro'>
        <h1>Cadastro de Livros</h1>
        <div>          
          <form id="formulario">
          <div className='form-group'>
            <label>Titulo</label>
              <input
                type="text"
                id='titulo'
                required
                disabled={loading}
                onChange={ ( event ) => {
                  setLivro( { ...livro, titulo: event.target.value } )
                } }
              />
          </div>
          <div className='form-group'>
            <label>Número de Páginas</label>
              <input
                type="text"
                id='num'
                required
                disabled={ loading }
                min="1"
                onChange={ ( event ) => {
                  setLivro( { ...livro, num_paginas: event.target.value } )
                } }
              />
          </div>
          <div className='form-group'>
            <label>ISBN</label>
              <input
                type="text"
                id='isbn'
                required
                disabled={loading}
                onChange={ ( event ) => {
                  setLivro( { ...livro, isbn: event.target.value } )
                } }
              />
          </div>
          <div className='form-group'>
            <label>Editora</label>
              <input
                type="text"
                id='editora'
                required
                disabled={loading}
                onChange={ ( event ) => {
                  setLivro( { ...livro, editora: event.target.value } )
                } }
              />
          </div> 
          <div className='form-group'>
              <button
                type='button'
                onClick={ createLivro }
                disabled={ loading }
                style={ {
                  opacity: loading ? 0.6 : 1,
                  cursor: loading ? 'not-allowed' : 'pointer'
                }}
              >
                { loading ? 'Cadastrando...' : 'Cadastrar Livro' }
              </button> 
              
              <button
                type='button'
                onClick={ limparFormulario }
                disabled={ loading }
                style={ {
                  opacity: loading ? 0.6 : 1,
                  cursor: loading ? 'not-allowed' : 'pointer'
                }}
              >
                Limpar
              </button>  
          </div>         
          </form>
        </div>
    </div>
  </>)
  
}

export default LivrosCadastro
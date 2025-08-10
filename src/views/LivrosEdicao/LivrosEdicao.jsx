import {useEffect , useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import "./index.scss"
import SubmenuLivros from '../../components/SubmenuLivros/SubmenuLivros'
import { LivrosService } from '../../api/LivrosService'
import { Toast } from '../../components/Notifications/Notifications'

const LivrosEdicao = () => {  
  let {livroId} = useParams();
  const navigate = useNavigate()

  const [livro, setLivro] = useState({})
  const [ loading, setLoading] = useState(false)
  const [loadingData, setLoadingData] = useState(true)

  async function getLivro(){
    setLoadingData(true)
    try {
      const {data} = await LivrosService.getLivro(livroId);
      setLivro(data)
    } catch (error) {
      console.error('Error ao carregar livro:', error)
      Toast.error('Erro ao carregar dados do livro')
      setTimeout(() => navigate('/'), 2000)
    } finally {
      setLoadingData(false)
    }
  }

  async function editLivro() {
    
    if (!livro.id || !livro.title || !livro.pages || !livro.isbnCode || !livro.publisher) {
      Toast.warning('Todos os campos devem estar preenchidos.')
      return
    }

    if (!livro.title.trim() || !livro.isbnCode.trim() || !livro.publisher.trim()) {
      Toast.warning('Por favor, preencha todos os campos corretamente.')
      return
    }
      const body = {
          id:Number(livro.id),
          title: livro.title.trim(),
          pages: Number(livro.pages),
          isbnCode: livro.isbnCode.trim(),
          publisher: livro.publisher.trim()
      }
    

      setLoading(true)
      
      try {
        const response = await LivrosService.updateLivro(Number(livro.id),body)
        const livroEdited = response.data 
        const successMessage = `Livro "${livroEdited.title}" cadastrado com sucesso!`

        Toast.success( successMessage, {
          autoClose: 3000,
          onClose: () => {
            setTimeout( () => {
              navigate('/livros')
            }, 1000)
          }
        })
      } catch (error) {
        console.error('Erro ao editar livro:', error)
        const errorMessage = error.response?.data?.message || error.message || 'Erro desconhacido'
        const errorStatus = error.response?.status || 'Erro'

        Toast.error(`${errorStatus} - ${errorMessage}`, {
          autoClose: 5000
        })

      } finally {
        setLoading(false)
    }    
  }

  const handleCancel = () => {
    navigate('/')
  }
  
  useEffect(() => {
    getLivro()    
  }, [])  

  if (loadingData) {
    return (
      <>
        <Header/>
        <SubmenuLivros/>
        <div className='livrosCadastro'>
          <h1>Carregando dados do livro...</h1>
        </div>
      </>
    )
  }

  return (
  <>
    <Header/>    
    <SubmenuLivros/>
    <div className='livrosCadastro'>
        <h1>Edição de Livros</h1>
        <div>
          <form id="formulario">
            <div className='form-group'>
              <label>Id</label>
              <input 
              type="text" 
              disabled 
              value={livro.id || ''}
            />
            </div>
            <div className='form-group'>
              <label>Título</label>
              <input
                type="text"
                required
                disabled={loading} 
                onChange={ ( event ) => { 
                  setLivro( { ...livro, title: event.target.value } ) 
                }}
                value={ livro.title || '' }
              />
            </div>
            <div className='form-group'>
              <label>Número de Páginas</label>
              <input
                type="text"
                required
                disabled={loading}
                onChange={ ( event ) => { 
                  setLivro( { ...livro, pages: event.target.value } ) } }
                value={ livro.pages || '' } 
              />
            </div>
            <div className='form-group'>
              <label>ISBN</label>
              <input
                type="text"
                required 
                disabled={loading}
                onChange={ ( event ) => { 
                  setLivro( { ...livro, isbnCode: event.target.value } ) 
                }}
                value={ livro.isbnCode || '' }
              />
            </div>
            <div className='form-group'>
              <label>Editora</label>
              <input
                type="text"
                required
                disabled={loading}
                onChange={ ( event ) => { 
                  setLivro( { ...livro, publisher: event.target.value } ) 
                }}
                value={ livro.publisher || '' }
              />
            </div> 
            <div className='form-group'>
              <button 
                type='button' 
                onClick={editLivro}
                disabled={loading}
                style={{
                  opacity: loading ? 0.6 : 1,
                  cursor: loading ? 'not-allowed' : 'pointer'
                }}
              >
                {loading ? 'Atualizando...' : 'Atualizar Livro'}
              </button> 

              <button
                type='button'
                onClick={handleCancel}
                disabled={loading}
                style={{
                  opacity: loading ? 0.6 : 1,
                  cursor: loading ? 'not-allowed' : 'pointer'
                }}
              >
                Voltar
              </button> 
            </div>                   
          </form>
          </div>        
    </div>
  </>)
  
}

export default LivrosEdicao
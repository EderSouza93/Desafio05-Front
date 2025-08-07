import {useEffect , useState} from 'react'
import Header from '../../components/Header/Header'
import "./index.scss"
import SubmenuLivros from '../../components/SubmenuLivros/SubmenuLivros'
import { useParams } from 'react-router-dom'
import { LivrosService } from '../../api/LivrosService'

const LivrosEdicao = () => {  
  let {livroId} = useParams();

  const [livro, setLivro] = useState([])

  async function getLivro(){
    const {data} = await LivrosService.getLivro(livroId);
    setLivro(data)
  }

  async function editLivro() {
    const { id, title, pages, isbnCode, publisher } = livro 

    if ( id && title && pages && isbnCode && publisher ) {
      const body = {
          id:Number(id),
          title,
          pages: Number(pages),
          isbnCode,
          publisher
      }
      
      await LivrosService.updateLivro(Number(id),body)
        .then(({data})=>{
          alert(data.mensagem)
        })
        .catch(({response:{data,status}})=>{
          alert(`${status} - ${data}`)      
        });
      } else {
        alert('Todos os campos devem estar preenchidos.')
      }
    }


  useEffect(() => {
    getLivro()    
  }, [])  

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
              <input type="text" disabled value={livro.id || ''}></input>
            </div>
            <div className='form-group'>
              <label>Título</label>
              <input
                type="text"
                required 
                onChange={ ( event ) => { setLivro( { ...livro, title: event.target.value } ) } }
                value={ livro.title || '' }
              />
            </div>
            <div className='form-group'>
              <label>Número de Páginas</label>
              <input
                type="text"
                required
                onChange={ ( event ) => { setLivro( { ...livro, pages: event.target.value } ) } }
                value={ livro.pages || '' } />
            </div>
            <div className='form-group'>
              <label>ISBN</label>
              <input
                type="text"
                required 
                onChange={ ( event ) => { setLivro( { ...livro, isbnCode: event.target.value } ) } }
                value={ livro.isbnCode || '' }
              />
            </div>
            <div className='form-group'>
              <label>Editora</label>
              <input
                type="text"
                required
                onChange={ ( event ) => { setLivro( { ...livro, publisher: event.target.value } ) } }
                value={ livro.publisher || '' }
              />
            </div> 
            <div className='form-group'>
              <button type='button' onClick={()=>{
              editLivro()
            }}>Atualizar Livro</button>  
            </div>                   
          </form>
          </div>        
    </div>
  </>)
  
}

export default LivrosEdicao
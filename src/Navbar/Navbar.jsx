import './Navbar.css'
import { Link } from 'react-router-dom';
import carrinho from './img1.png'
import perfil from './profile-user.png'
import { useHistory } from "react-router-dom";


const Navbar = ({token, aoLogout}) =>{
    const history = useHistory();
    
    const logout = () => {
        history.push('/login')
        aoLogout()
      }

      const Itens = () => {
        if (token) {
            return(
                <div>
                    <nav>
                        <ul>
                            <li><Link className="tituloTopo" to="/">Home</Link></li>
                            <li><Link className="tituloTopo" onClick={logout}>Logout</Link></li>
                        </ul>
                        <ul>
                            <li><Link  to="/carrinho"><img className="carrinho" src={carrinho}></img></Link></li>
                            <li><Link  to="/perfil"><img className="carrinho" src={perfil}></img></Link></li>
                        </ul>
                    </nav>
        
                </div>
            )
        }

        return <div>
            <nav>
                <ul>
                    <li><Link className="tituloTopo" to="/login">Login</Link></li>
                    <li><Link className="tituloTopo" to="/cadastro">Cadastre-se</Link></li>
                </ul>
            </nav>
        </div>
      }

      return (
         Itens()
      ) 
}
export default Navbar;
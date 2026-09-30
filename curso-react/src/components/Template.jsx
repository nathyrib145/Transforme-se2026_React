import { Link } from "react-router"

export function Template({children}){
return(
    <>
    <nav className="flex items-center py-3 px-4 shadow-lg fixed top-0 w-full bg-red-900">
                <a className="mr-2 p-2 rounded-full hover:bg-red-600  hover:text-white" href="#about">Sobre</a>
                <a className="mr-2 p-2 rounded-full hover:bg-red-600  hover:text-white" href="#prices">Preços</a>
                <a className="mr-2 rounded-full p-2 hover:bg-red-600 hover:text-white" href="#features">Benefícios</a>
                <Link className="mr-5 py-2 px-4 bg-primary hover:shadow-inner rounded-full text-white ml-auto " to="/auth">Acessar</Link>
            </nav>
            {children}
            <footer>
                site criado por: Nathalia
            </footer>
    </>
)
}
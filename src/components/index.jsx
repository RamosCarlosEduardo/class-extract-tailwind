import {
	container,
	ul,
	navLink,
  mudaCorFundo } from "./index.css";
import {cls} from '/utils/cls.js'

function NavbarUnorganized () {
  return (
    <nav className="flex flex-col lg:flex-row lg:px-48 gap-8 lg:gap-0  py-5 border-b-2 border-green-600 items-center justify-between bg-backgroundWhite">
      <a href="/">
        <img className="w-[125px]" src={'https://http.cat/202'} alt="Logo da Nav de Exemplo." />
      </a>
      <ul className="flex flex-col md:flex-row gap-2 md:gap-8 font-kalam">
          <li><a href="/" className='text-green-600 text-xl lg:text-2xl navlink'>Home</a></li>
          <li><a href="/produtos" className='text-green-600 text-xl lg:text-2xl navlink'>Produtos</a></li>
          <li><a href="/contato" className='text-green-600 text-xl lg:text-2xl navlink'>Contato</a></li>
          <li><a href="/carrinho" className="flex items-center gap-2 text-green-600 text-xl lg:text-2xl navlink">Carrinho</a></li>
      </ul>
    </nav>
  );
}

function NavbarOrganized (props) {    
    return (
        <nav className={container}>
          <a href="/" >
            <img className="w-[125px]" src={'https://http.cat/202'} alt="Logo da Nav de Exemplo." />
          </a>
          <ul className={ul}>
              <li><a href="/" className={cls(mudaCorFundo(props.intent), navLink)}>Home</a></li>
              <li><a href="/produtos" className={navLink}>Produtos</a></li>
              <li><a href="/contato" className={navLink}>Contato</a></li>
              <li><a href="/carrinho" className={navLink}>Carrinho</a></li>
          </ul>
        </nav>
      )
}

export {NavbarUnorganized, NavbarOrganized}
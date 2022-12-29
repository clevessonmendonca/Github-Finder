type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

import { useState, KeyboardEvent } from 'react'

import { BsSearch } from 'react-icons/bs'

import classes from './index.module.css'

export const Search = ({loadUser}: SearchProps) => {
    const [userName, setUsername] = useState("")

    const handleKeyDown = (event: KeyboardEvent) => {
        if(event.key === 'Enter') {
            loadUser(userName)
        }
    }

  return (
    <div className={classes.search}>
        <h2>Busque por um usuário:</h2>
        <p>Conheça seus melhores repositórios</p>
        <div className={classes.search_container}>
            <input 
                type="text" name="" id="" 
                placeholder="Digite o nome do usuário" 
                onChange={(e) => setUsername(e.target.value)} 
                onKeyDown={handleKeyDown}
            />
            <button onClick={() => loadUser(userName)}>
                <BsSearch />
            </button>
        </div>
    </div>
  )
}

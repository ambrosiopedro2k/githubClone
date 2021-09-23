import React, {useState} from 'react';
import { Container, GithubLogo, SearchForm } from './style';
import {useNavigate} from 'react-router-dom'


const Header = () => {
	const [searchInput, setSearchInput] = useState('')
	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault()
    console.log(searchInput)

		navigate('/' +searchInput.toLowerCase().trim())
	}
    return (
       <Container>
        <GithubLogo />
        <SearchForm onSubmit={handleSubmit} >
            <input type="text" onChange={(e)=>{setSearchInput(e.target.value)}} placeholder="Enter Username or Repo" />

        </SearchForm>
       </Container>
    );
}

export default Header;   
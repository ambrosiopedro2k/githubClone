import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon } from './style'

const Repo = () => {
    return (
       <Container> 
       <Breadcrumb>
       	  <RepoIcon />
       	  <Link className={'username'}  to={'/ambrosiopedro2k'}>
       	  pedrogaspar2k
       	  </Link>

		  <span>/</span>

       	  <Link className={'reponame'}  to={'ambrosiopedro2k/The-Doupleganger'}>
       	  The-Doupleganger
       	  </Link>

       </Breadcrumb>

       <p>Contains all of my clones from famous sites</p>

       <Stats>
       	<li>
       	  <StarIcon />
       	  <strong>9</strong>
       	  <span>stars</span>

       	</li>
       	<li>
       	  <ForkIcon />
       	  <strong>0</strong>
       	  <span>forks</span>

       	</li>
       </Stats>

       <LinkButton>
         <GithubIcon />
         <span>view on github</span>
       </LinkButton>

       </Container> 
    );
}

export default Repo;
import React from 'react'
import {Link} from 'react-router-dom'
import {Container, TopSide, RepoIcon, BotSide, StarIcon, ForkIcon} from './style'

const RepoCard = ({username, reponame, description, language, stars, forks}) => {

const languageClass = language ? language.toLowerCase() : 'other'; 

    return(
    	<Container>
    	
    		<TopSide>
    			<header>

    				<RepoIcon />
    				<Link to={`/${username}/${reponame}`}> {reponame} </Link>
    			
    			</header>

    			<p> {description} </p>

    		</TopSide>

    		<BotSide>
    			<ul>
    				<li>

    					<div className= {`language ${languageClass}`} />
    					<span> {language} </span>
    				</li>

    				<li>
    					<StarIcon />
    					<span> {stars} </span>
						 
    				</li>

    				<li>
    					<ForkIcon />
    					<span> {forks} </span>
					</li>	
    			</ul>


    		</BotSide>


    	</Container>		
    )
}

export default  RepoCard
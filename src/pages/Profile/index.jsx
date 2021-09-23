import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'

import ProfileData from '../../components/ProfileData'
import RepoCard from '../../components/RepoCard'
import RandomCalendar from '../../components/RandomCalendar'
import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading, RepoIcon, Tab} from './style';


const Profile = () => {
    let {username = 'ambrosiopedro2k'} = useParams()
    let name = 'Ambrosio Pedro Gaspar'

    const [data, setData] = useState({
        user : {},
        repos : [], 
        error : {},
    })

    useEffect(() => {
        Promise.all([
        fetch(`http://api.github.com/users/${username}`),
        fetch(`http://api.github.com/users/${username}/repos`)
    ]).then(async (result) => {
        const [user, repos] = result

        if (user.status === 400) {
            setData({error: 'failed to get data from address'})
            return
        }

        setData({
            user: await user.json(),
            repos: await repos.json()
        })

    })
    },[username])


     const TabContent= () => {

        return <div className="content">
            <RepoIcon /> 
            <span className="lel">Repositories</span>
            <span className="num">{data.user.public_repos || 18}</span>
        </div>
    }

    return (
        <Container>

            <Tab className="desktop">

            <div className="wrapper">
            <span className="offset" />
            <TabContent />
            </div>
            
            <span className="line" />
            </Tab>

            <Main>
                <LeftSide>
                <ProfileData 
                username={data.user.login || username}
                name={data.user.name || name}
                avatarUrl={data.user.avatar_url || '../src/files/img/photo001.jpg'}
                followers={data.user.followers || 75}
                following={data.user.following || 30}
                company={data.user.company || 'Ampega-Ds'}
                location={data.user.location || 'Luanda, Angola'}
                email={data.user.email || 'pedrosmrt10@gmail.com'}
                link={data.user.blog || 'linkedin.com/in/pedrogaspar'}
                />

                </LeftSide>
                <RightSide>

                <Tab className="phone">
                <TabContent />
                <span className="line"/>
                </Tab>

                    <Repos>
                        <h2>Random repos</h2>

                        <div>
                            
                        {data.repos.length > 0 ? data.repos.map(repo =>
                            <RepoCard 
                            key={repo.name} 
                            username={repo.owner.login} 
                            reponame={repo.name}
                            description={repo.description} 
                            language={repo.language}
                            stars={repo.stargazers_count} 
                            forks={repo.forks} /> 
                            )
                            : [1,2,3,4,5,6].map(n =>
                            <RepoCard 
                            key={n} 
                            username={username} 
                            reponame={'The-Doupleganger'}
                            description={'My repository of famous services clones'} 
                            language={n%2 === 0 ? 'javascript' : 'typescript' }
                            stars={8} 
                            forks={4} /> 
                            )}

                        </div>
                         

                    </Repos>

                    <CalendarHeading>
                    Random Calendar (this do not represent real data) 

                    </CalendarHeading>

                    <RandomCalendar />

                </RightSide>
            </Main>
        </Container>
    );
}

export default Profile; 
import React from 'react';
import { Container, Flex, Avatar, Row, PeopleIcon, Column, CompanyIcon, LocationIcon, EmailIcon, LinkIcon } from './style';


const ProfileData = ({
    username,
    name,
    avatarUrl,
    followers,
    following,
    company,
    location,
    email,
    link}) => {
    
    return (
        <Container>
          <Flex>
            <Avatar src={avatarUrl} alt={username} />
            
            <div>
            <h2>{name}</h2>
            <h4>{username}</h4>
            </div>

          </Flex>

          <Row>
            <li>
              <PeopleIcon />
              <strong>{followers}</strong>
              <span>followers</span>
              <span>&gt;</span>
            </li>
            <li>
            <strong>{following}</strong>
              <span>following</span>
            </li>
          </Row>

          <Column>
            {company && (
                <li>
                    <CompanyIcon />
                    <span>{company}</span>
                </li>
            )}
            {location && (
                <li>
                    <LocationIcon />
                    <span>{location}</span>
                </li>
            )}
            {email && (
                <li>
                    <EmailIcon />
                    <span>{email}</span>
                </li>
            )}
            {link && ( 
                <li>
                    <LinkIcon /> 
                    <span>{link}</span> 
                </li>
            )}
          </Column>

        </Container>
    );
}

export default ProfileData;
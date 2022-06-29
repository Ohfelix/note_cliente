import { Column, Container, Section, Title } from 'rbx';
import React, { Fragment } from 'react'
import presentationImage from '../../assets/images/presentation.png';
import Header from '../../components/header';
import '../../styles/home.scss';


const HomeScreen = () => {
  return (
   <Fragment>
        <Header/>        
            <Section size='medium' className='home'>
                <Container>
                    <Column.Group>
                        <Column size={5}>
                            <Title size={2} spaced className='has-text-white'>Crie suas notas facilmente e acesse em nuvem </Title>
                            <Title size={5} spaced className='has-text-light' subtitle> Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                            </Title>
                            <a href='#' className='button is-outlined is-white is-large' alt= "" ><strong>register for free now</strong></a>
                        </Column>
                        <Column size={6} offset={1}>
                            <img src={presentationImage} alt="" />
                        </Column>
                    </Column.Group>
                </Container>
            </Section>
   </Fragment>
  )
}

export default HomeScreen;
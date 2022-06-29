import React, { Fragment } from 'react'
import Header from '../../../components/header'
import { Column, Section, Title, Container, Card } from 'rbx';
import logo from '../../../assets/images/logo.png'


const RegisterScreen = () => {
    return(
        <Fragment>
            <Header>
                <Section>
                    <Container>
                        <Column.Group centered>
                            <Column size={3}>
                                <Card>
                                    <Card.Content>
                                        <Section>
                                            <Column.Group centered>
                                                <img src={logo.png} alt=""/>
                                            </Column.Group>                                         
                                              <Column.Group>
                                                <Column size={12}>
                                                    <Title size={12} className="has-text-grey has-tex t-centered">
                                                        Your notes on the cloud
                                                    </Title>
                                                </Column>
                                           </Column.Group>                                           
                                        </Section>
                                    </Card.Content>
                                </Card>
                            </Column>
                        </Column.Group>
                    </Container>
                </Section>
            </Header>

        </Fragment>


    ) 
}

export default RegisterScreen;
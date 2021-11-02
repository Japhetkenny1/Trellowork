import React from 'react'
import styled from "styled-components"

const Lofty2 = () => {
    return (
        <Container>
            <Wrapper>
                <Card>
                </Card>
                <TextBox>This is my box card</TextBox> 
            </Wrapper>
        </Container>
    )
}

export default Lofty2;

const Container = styled.div`
width: 100%;
height: 100%;
// background-color: grey;
// justify-content: center;
`

const Wrapper = styled.div`
width: 100%;
height: 100%;
background-color: blue;
justify-content: center;
display: flex;
// flex-direction: column;
// justify-content: column;
`
const Card = styled.div`
width: 400px;
height: 300px;
background: white;
justify-content: center;
border-radius: 5px;
margin-bottom: 10px;
margin-top: 10px;
margin-right: 15px;


`
const TextBox = styled.div`

color: red;
text-weight: bold;
justify-content: center;
padding-top: 100px;
`
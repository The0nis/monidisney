import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <CTA>
            <CTALogOne src="/images/cta-logo-one.svg" />
            <SignUp>
            GET ALL THERE
        </SignUp>
        <Description>
        A user acceptance test (UAT) is a period of time where you, the stakeholder, use the system and sign off on the development.  You can consider it the telike a final walkthrough of a custom home.
        </Description>

        <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>

        
        
    </Container>
  )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh-70px);
    display: flex;
    align-items: top;

    &:before{
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        content: "";
        no-repeat: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        background-image: url("/images/login-background.jpg");
        opacity: 0.7px;
    }
`
const CTA = styled.div`
    max-width: 650x;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top:  100px;
    align-items: center;
`

const CTALogOne = styled.img`


`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover{
        background-color: #0483ee;

    }
`
const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 15px;
`

const CTALogoTwo = styled.img`

`
import React from 'react'
import styled from 'styled-components'


function Detail() {
  return (
    <Container>
        <Background>
            <img src='../images/bg.webp' />
        </Background>

        <ImageTitle>
            <img src='../images/logo.svg' />
        </ImageTitle>

        <Controls>
            <PlayButton>
                <img src='/images/play-icon-black.png' />
                <span>PLAY</span>
            </PlayButton>

            <TrailerButton>
            <img src='/images/play-icon-white.png' />
                <span>TRAILER</span>

            </TrailerButton>

            <AddButton>
                <span>+</span>
            </AddButton>

            <GroupWatch>
                <img src='/images/group-icon.png' />
            </GroupWatch>
        </Controls>

        <SubTitle>
            2018 * 7m * Family, Fantansy, Kids, Animation
        </SubTitle>

        <Description>
            A user acceptance test (UAT) is a period of time where you, the stakeholder, use the system and sign off on the development.  You can consider it the telike a final walkthrough of a custom home. Your job is to look at everything, identify any issues that sters may have missed and start to get ready for production.
        </Description>


    </Container>
  )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh-70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;

`

const Background  = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right:  0;
    z-index: -1;
    opacity: 0.8;

    img {
        width:  100%;
        height: 100%;
        object-fit: cover;   
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    margin-top: 60px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;


`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    cursor: pointer;

    &:hover{
        background: rgb(198, 198, 198);
    }


`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: white;
`

const AddButton = styled.button`
    width: 44px;
    height: 44px;
    display:  flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.6);
    border: 2px solid white;
    cursor: pointer;
    margin-right: 16px;
    span {
        font-size: 30px;
        color: white;
    }
`

const GroupWatch = styled(AddButton)`
    background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
    color: rgb(249,  249, 249);
    font-sze: 15px;
    min-height: 20px;
    margin-top: 26px;

`

const Description = styled.div`
    line-height: 25px;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 760px;

`
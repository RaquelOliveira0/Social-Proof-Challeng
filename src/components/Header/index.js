import React from 'react'
import { Title, Container, SubTitle, Span, Div, DivWrap, Img, Legend } from './styled'
import IconStar from '../../imagens/icon-star.svg'

const Header = () => {
    return (
        <Container>
            <DivWrap>
                <Title>10,000+ of our users love our products.</Title>
                <SubTitle>We only provide great products combined with excellent
                customer service.See what our satisfied customers are
                saying about our services.
         </SubTitle>
            </DivWrap>
            <Div>
                <Span>
                    <Img src={IconStar} />
                    <Img src={IconStar} />
                    <Img src={IconStar} />
                    <Img src={IconStar} />
                    <Img src={IconStar} />
                    <Legend>Rated 5 Stars in Reviews</Legend>
                </Span>
                <Span>

                    <Img src={IconStar} />
                    <Img src={IconStar} />
                    <Img src={IconStar} />
                    <Img src={IconStar} />
                    <Img src={IconStar} />
                    <Legend>Rated 5 Stars in Report Guru</Legend>
                </Span>

                <Span>
                    <Img src={IconStar} />
                    <Img src={IconStar} />
                    <Img src={IconStar} />
                    <Img src={IconStar} />
                    <Img src={IconStar} />
                    <Legend>Rated 5 Stars in BestTech</Legend>
                </Span>
            </Div>
        </Container>
    )

}
export default Header;
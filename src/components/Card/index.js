import React from 'react'
import { Container, Div, Img, Title, Subtitle, Verified } from './styled'
import Person1 from '../../imagens/image-colton.jpg'
import Person2 from '../../imagens/image-irene.jpg'
import Person3 from '../../imagens/image-anne.jpg'

const Card = () => {

  const comment1 = {
    id: 1,
    user: 'Colton Smith',
    verified: 'Verified Buyer',
    comment: "\"We needed the same printed design as the one we had ordered a week prior.Not only didi they find the original order,but we also received it in time.Excellent!\""
  }

  const comment2 = {
    id: 2,
    user: 'Irene Roberts',
    verified: 'Verified Buyer',
    comment: '\"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.\"'
  }

  const comment3 = {
    id: 2,
    user: 'Anne Wallace',
    verified: 'Verified Buyer',
    comment: '\"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!\"'
  }
  return (
    <>
      <Container>
        <Div>

          <Img src={Person1} />

          <Title>  {comment1.user}</Title>
          <Verified>{comment1.verified}</Verified>
          <Subtitle> {comment1.comment}</Subtitle>

        </Div>
        <Div>
          <Img src={Person2} />
          <Title> {comment2.user}</Title>
          <Verified>  {comment2.verified}</Verified>
          <Subtitle>  {comment2.comment}</Subtitle>
        </Div>
        <Div>
          <Img src={Person3} />
          <Title> {comment3.user}</Title>
          <Verified>  {comment3.verified}</Verified>
          <Subtitle>  {comment3.comment}</Subtitle>
        </Div>

      </Container>
    </>

  )
}

export default Card;
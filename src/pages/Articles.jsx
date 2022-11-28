import React from 'react'
import { StyledCard } from '../components/styled/Card.styled'
import {StyledPosition} from '../components/styled/Position.styled'

function ArticlesPage() {
  return (
    <div>
    <StyledPosition>
    <StyledCard>
      <div>
        <h3>Title</h3>
        <div>
        {/* <img></img> */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi similique repellendus, quasi necessitatibus quidem sapiente error totam laudantium dignissimos iure! Earum, alias! Quo nulla odio quaerat iste modi nemo omnis.</p>
        </div>
      </div>
      </StyledCard>
      <StyledCard>
      <div>
        <h3>Title</h3>
        <div>
        {/* <img></img> */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi similique repellendus, quasi necessitatibus quidem sapiente error totam laudantium dignissimos iure! Earum, alias! Quo nulla odio quaerat iste modi nemo omnis.</p>
        </div>
      </div>
      </StyledCard>
      <StyledCard>
      <div>
        <h3>Title</h3>
        <div>
        {/* <img></img> */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi similique repellendus, quasi necessitatibus quidem sapiente error totam laudantium dignissimos iure! Earum, alias! Quo nulla odio quaerat iste modi nemo omnis.</p>
        </div>
      </div>
      </StyledCard>
      </StyledPosition>
    </div>
    
  )
}

export default ArticlesPage
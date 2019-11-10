import React, { Component } from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`

`;

class Buttons extends Component {
    
      render() {
        return (
            <Wrapper>
                <div className="buttons">
                    <button className="reject">Reject</button>
                    <button className="accept">Take it</button>
                </div>
            </Wrapper>
            );
        }
    }
      
export default Buttons
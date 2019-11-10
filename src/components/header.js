import React, { Component } from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`

`;

class Header extends Component {
  
      render() {
        return (
            <Wrapper>
                <div className="header">
                    <img src="assets/logo.png" />
                    <h5 className="card-title">Jon Doe</h5>
                </div>
            </Wrapper>
            );
        }
      }
      
      export default Header
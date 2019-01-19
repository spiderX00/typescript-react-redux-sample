import React, { Component } from 'react';
import styled, {theme, GlobalStyle} from "../../theme";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;     
`;

class App extends Component {
    render() {
        return (
            <AppWrapper>
                <GlobalStyle/>
                <Header/>
                <Footer/>
            </AppWrapper>
        )
    }
}

export default App;
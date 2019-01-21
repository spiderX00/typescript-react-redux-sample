import styled, {theme} from "../../theme";

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh; 
        
    .main-content {
      display: flex;
      flex-flow: column wrap;
      align-items: center;    
    }
`;

export default AppWrapper;
import styled from 'styled-components';

export const ContainerTitle = styled.div`
  display: flex;
  height: 10em;
  width: 10em;
  margin-left: 25em;
  margin-top:-30em;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;
export const ContainerSynopsis = styled.div`
  display: flex;
  height: 10em;
  width: 30em;
  margin-left: 48em;
  margin-top:-10em;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const ContainerDate = styled.div`
  display: flex;
  height: 10em;
  width: 20em;
  margin-left: 25em;
  margin-top:5em;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;
export const ContainerVote = styled.div`
  display: flex;
  height: 10em;
  width: 30em;
  margin-left: 48em;
  margin-top:-10em;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const ContainerPoster = styled.div`
  display: flex;
  margin-left: 1em;
  height:30em;
  width:10em;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const ContainerGraph = styled.div`
  display:flex;
  border:solid;
  
`;

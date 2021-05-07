import {Title, Linked, BtnCreate} from '../styledComponents'

const NotFound = () => {
  return (
    <div style={{ display: 'grid', height:'100vh'}}>
      <div style={{ placeSelf: 'center' }}>
        <Title style={{fontSize:'25px', textAlign:'center'}}>Oops! Something is clearly wrong here... </Title>
        <Title style={{textAlign:'center'}} > The page you are looking for doesn’t exist. (404)</Title>
        <Linked to='/'><BtnCreate style={{margin:'auto', marginTop:'1em'}}>GO HOME</BtnCreate></Linked>
      </div>
    </div>
  );
};

export default NotFound;

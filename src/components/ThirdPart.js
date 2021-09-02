import { Input, ThridPartDiv } from '../styledComponents';
import TrendingCommunities from './TrendingCommunities';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SubLayer from './SubLayer';
import SubLayerNot from './SubLayerNot';
import MyProfile from './MyProfile';
import { changeTheme } from '../redux/slices/authorizationSlice';
import { useDispatch } from 'react-redux';
const ThirdPart = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useParams();
  const authorization = useSelector((state) => state.authorization.authorization);
  const { subReddit } = useParams();
  const token = useSelector((state) => state.authorization.token);


  return (
    <ThridPartDiv>
      <Input />
      {!user && !subReddit && <TrendingCommunities />}
      {!user && subReddit && token && <SubLayer />}
      {!user && !authorization && subReddit && <SubLayerNot />}
      {user && <MyProfile name={user} />}
    </ThridPartDiv>
  );
};

export default ThirdPart;

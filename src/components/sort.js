import { useParams, useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import {
  SortingElement,
  Sorting,
  LinkedSort,
  SortingContainer,
  NewIcon,
  HotIcon,
  BestIcon,
  TopIcon,
  RisingIcon,
  TopDropdownDiv,
  TopSortBtn,
  TopBtn,
  TopText,
  Linked,
} from '../styledComponents';

const Sort = () => {
  const { pathname } = useLocation();
  const { subReddit } = useParams();
  const activeBest =
    pathname.includes('/best') || pathname === '/' || pathname.endsWith(subReddit + '/') ? 1 : 0;
  const activeNew = pathname.includes('/new') ? 1 : 0;
  const activeHot = pathname.includes('/hot') ? 1 : 0;
  const activeTop = pathname.includes('/top') ? 1 : 0;
  const activeRising = pathname.includes('/rising') ? 1 : 0;
  const [topFocus, setTopFocus] = useState(0);

  function handleFocus() {
    if (topFocus === 1) {
      setTopFocus(0);
    } else {
      setTopFocus(1);
    }
  }

  return (
    <Sorting>
      <SortingContainer active={activeBest}>
        <SortingElement>
          <Linked to={subReddit ? `/r/${subReddit}/best` : `/best`}><BestIcon active={activeBest} /></Linked>
          <LinkedSort active={activeBest} to={subReddit ? `/r/${subReddit}/best` : `/best`}>
            Best
          </LinkedSort>
        </SortingElement>
      </SortingContainer>
      
      <SortingContainer active={activeNew}>
        <SortingElement>
        <Linked to={subReddit ? `/r/${subReddit}/new` : `/new`}><NewIcon active={activeNew} /></Linked>
          <LinkedSort active={activeNew} to={subReddit ? `/r/${subReddit}/new` : `/new`}>
            New
          </LinkedSort>
        </SortingElement>
      </SortingContainer>
      <SortingContainer active={activeHot}>
        <SortingElement>
          <Linked to={subReddit ? `/r/${subReddit}/hot` : `/hot`}><HotIcon active={activeHot} /></Linked> 
          <LinkedSort active={activeHot} to={subReddit ? `/r/${subReddit}/hot` : `/hot`}>
            Hot
          </LinkedSort>
        </SortingElement>
      </SortingContainer>
      <SortingContainer active={activeTop} onClick={() => handleFocus()}>
        <SortingElement>
          <TopIcon active={activeTop} />
          <TopBtn active={activeTop}>
            <TopText>Top</TopText>
            
            <TopDropdownDiv active={topFocus}>
              <TopSortBtn>
                <Link to={subReddit ? `/r/${subReddit}/top/day` : `/top/day`}>today</Link>
              </TopSortBtn>
              <TopSortBtn>
                <Link to={subReddit ? `/r/${subReddit}/top/week` : `/top/week`}>week</Link>
              </TopSortBtn>
              <TopSortBtn>
                <Link to={subReddit ? `/r/${subReddit}/top/month` : `/top/month`}>month</Link>
              </TopSortBtn>
              <TopSortBtn>
                <Link to={subReddit ? `/r/${subReddit}/top/year` : `/top/year`}>year</Link>
              </TopSortBtn>
              <TopSortBtn>
                <Link to={subReddit ? `/r/${subReddit}/top/all` : `/top/all`}>all</Link>
              </TopSortBtn>
            </TopDropdownDiv>
          </TopBtn>
        </SortingElement>
      </SortingContainer>
      <SortingContainer active={activeRising}>
        <SortingElement>
          <Linked to={subReddit ? `/r/${subReddit}/rising` : `/rising`}><RisingIcon active={activeRising} /></Linked>
          <LinkedSort active={activeRising} to={subReddit ? `/r/${subReddit}/rising` : `/rising`}>
            Rising
          </LinkedSort>
        </SortingElement>
      </SortingContainer>
    </Sorting>
  );
};

export default Sort;

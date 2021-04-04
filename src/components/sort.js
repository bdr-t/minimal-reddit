import { useParams, useLocation } from "react-router-dom";
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
} from "../styledComponents";


const Sort = () => {
  const { pathname } = useLocation();
  const { subReddit } = useParams();
  const activeBest = pathname.includes("/best") || pathname === "/" ? 1 : 0
  const activeNew = pathname.includes("/new") ? 1 : 0
  const activeHot = pathname.includes("/hot") ? 1 : 0
  const activeTop = pathname.includes("/top") ? 1 : 0
  const activeRising = pathname.includes("/rising") ? 1 : 0

  return (
    <Sorting>
      <SortingContainer active={activeBest}>
        <SortingElement>
            <BestIcon active={activeBest}/>
          <LinkedSort active={activeBest} to={subReddit ? `/r/${subReddit}/best` : `/best`}>
            Best
          </LinkedSort>
        </SortingElement>
      </SortingContainer>
      <SortingContainer active={activeNew} >
        <SortingElement >
          <NewIcon active={activeNew}/>
          <LinkedSort active={activeNew} to={subReddit ? `/r/${subReddit}/new` : `/new`}>
            New
          </LinkedSort>
        </SortingElement>
      </SortingContainer>
      <SortingContainer active={activeHot}>
        <SortingElement>
            <HotIcon active={activeHot}/>
          <LinkedSort active={activeHot} to={subReddit ? `/r/${subReddit}/hot` : `/hot`}>
            Hot
          </LinkedSort>
        </SortingElement>
      </SortingContainer>
      <SortingContainer active={activeTop}>
        <SortingElement>
            <TopIcon active={activeTop}/>
          <LinkedSort active={activeTop} to={subReddit ? `/r/${subReddit}/top` : `/top`}>
            Top
          </LinkedSort>
        </SortingElement>
      </SortingContainer>
      <SortingContainer active={activeRising}>
        <SortingElement>
            <RisingIcon active={activeRising}/>
          <LinkedSort active={activeRising} to={subReddit ? `/r/${subReddit}/rising` : `/rising`}>
              Rising
          </LinkedSort>
        </SortingElement>
      </SortingContainer>
    </Sorting>
  );
};

export default Sort;

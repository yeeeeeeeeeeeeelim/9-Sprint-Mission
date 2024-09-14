import "./App.css";

import { Header } from "./Header";
import { BestItems } from "./BestItems";
import { AllItems } from "./AllItems.js";
import { useCallback, useEffect, useState } from "react";
import throttle from "../utils/throttle";
import { PagenationBtn } from './Pagenation.js';

function App() {
  const [width, setWidth] = useState(window.innerWidth); 
  const [page, setPage] = useState(1); // 페이지네이션 버튼을 누르면 setPage()
  const [totalPage, setTotalPage] = useState(0);


  //리사이즈가 발생할때마다 width 상태를 업데이트하는 핸들러 = throttle의 콜백함수
  const handleResize = () => {
    setWidth(window.innerWidth);
  };  
  useEffect(() => {
    const throttleResizeHandler = throttle(handleResize, 500);
    window.addEventListener("resize", throttleResizeHandler);
    
    return () => {
      window.removeEventListener("resize", throttleResizeHandler);
    };
  }, []);

  //페이지네이션 컴포넌트에서 버튼 누르면 그 값을 page로 GET 요청 (AllItems 컴포넌트)
  const handlePageChange = useCallback((pageNum) => {
    setPage(pageNum);
  }, []);

  const getTotalPage = (total)=>{
    setTotalPage(total);
  }
  
  return (
    <>
      <Header />
      <main>
        <BestItems width={width} page={page}/>
        <AllItems width={width} page={page} getTotalPage={getTotalPage}  />
        <PagenationBtn page={page} totalPage={totalPage} onPageChange={handlePageChange}/>
      </main>
    </>
  );
}
export default App;
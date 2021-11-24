import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import BSCMemepad from "../pages/BSCMemepad";

const RouteComponent = () => {
   return(<>
        <Routes>
           <Route index element={ <Home /> } />
           <Route element={ <BSCMemepad /> }  path="Bscmemepad" />
        </Routes>   
   </>)
}

export default RouteComponent;
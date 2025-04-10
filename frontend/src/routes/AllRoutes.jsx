import { Routes, Route } from "react-router-dom";
import { HomeScreen, PageNotFound} from "../pages"; // from pages nu mattum potta pothu , dont need to mention index..

// imported the pages and provided routes..

export const AllRoutes = () => { // export keyword is mandatory , while setting all routes..

    return ( // router ah direct main.jsx , app component ku nela pass panniten..
        // so here Routes ku direct dild ah Route than irukkanum..
        // enakku initial ah render agura page , HomeScreen..
        <Routes>

            <Route path="/" element={<HomeScreen />}/> 

            <Route path="*" element={<PageNotFound/>}/>
            
        </Routes>
    )

    // so path = / , na HomeScreen page render agum, 
    // path = * , na  ethum match agalana, page not found..

    // intha Allroutes ah App.jsx la call pannanum..

    //  AFTER , ROUTES SET PANNATHUKKU APRM , ATHA CALL PANNANUM APPOTHAN ROUTES WORK AGUM , 
    // SO CALLED IT IN APP COMPONENT , BECAUSE APP COMPONENT THAN ENAKKU , MAIN.JSX LA RENDER AGUTHU , 
    // ROUTER AH MAIN.JSX LA YE DIRECT AH KUDUTHACHU..


}
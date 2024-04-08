// import {
//   ColumnDirective,
//   ColumnsDirective,
//   GridComponent,
// } from "@syncfusion/ej2-react-grids";
// import { useEffect } from "react";
// import { AppBarComponent } from "@syncfusion/ej2-react-navigations";
// import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
// import "./App.css";

// function App() {
//   const data = [
//     {
//       OrderID: 10248,
//       CustomerID: "VINET",
//       EmployeeID: 5,
//       OrderDate: new Date(8364186e5),
//       ShipName: "Vins et alcools Chevalier",
//       ShipCity: "Reims",
//       ShipAddress: "59 rue de l Abbaye",
//       ShipRegion: "CJ",
//       ShipPostalCode: "51100",
//       ShipCountry: "France",
//       Freight: 32.38,
//       Verified: !0,
//     },
//     {
//       OrderID: 10249,
//       CustomerID: "TOMSP",
//       EmployeeID: 6,
//       OrderDate: new Date(836505e6),
//       ShipName: "Toms Spezialitäten",
//       ShipCity: "Münster",
//       ShipAddress: "Luisenstr. 48",
//       ShipRegion: "CJ",
//       ShipPostalCode: "44087",
//       ShipCountry: "Germany",
//       Freight: 11.61,
//       Verified: !1,
//     },
//     {
//       OrderID: 10250,
//       CustomerID: "HANAR",
//       EmployeeID: 4,
//       OrderDate: new Date(8367642e5),
//       ShipName: "Hanari Carnes",
//       ShipCity: "Rio de Janeiro",
//       ShipAddress: "Rua do Paço, 67",
//       ShipRegion: "RJ",
//       ShipPostalCode: "05454-876",
//       ShipCountry: "Brazil",
//       Freight: 65.83,
//       Verified: !0,
//     },
//   ];
//   return (
//     <>
//       <div className="control-pane">
//         <div className="col-lg-12 control-section default-appbar-section">
//           <div className="control appbar-sample">
//               <div className="row">
//                 <div className="col-md-12">
//                   <AppBarComponent mode="Dense" colorMode="Primary">
//                     <ButtonComponent
//                       ref={(denseBtn) => (denseBtn = denseBtn)}
//                       aria-label="menu"
//                       cssClass="e-inherit menu"
//                       iconCss="e-icons e-menu"
//                     ></ButtonComponent>
//                     <span className="dense">React AppBar</span>
//                     <div className="e-appbar-spacer"></div>
//                     <ButtonComponent cssClass="e-inherit login">
//                       FREE TRIAL
//                     </ButtonComponent>
//                   </AppBarComponent>
//                 </div>
//               </div>
//               <br />
//             </div>
//           </div>
//         </div>
//       {/* </div> */}
//       <GridComponent dataSource={data}>
//         <ColumnsDirective>
//           <ColumnDirective field="OrderID" width="100" textAlign="Right" />
//           <ColumnDirective field="CustomerID" width="100" />
//           <ColumnDirective field="EmployeeID" width="100" textAlign="Right" />
//           <ColumnDirective
//             field="Freight"
//             width="100"
//             format="C2"
//             textAlign="Right"
//           />
//           <ColumnDirective field="ShipCountry" width="100" />
//         </ColumnsDirective>
//       </GridComponent>
//     </>
//   );
// }
// export default App;

import {BrowserRouter, Routes, Route} from 'react-router-dom';
// pages
// import {Home, CategoryProduct, ProductSingle, Cart, Search} from "./pages/index";
import {Home} from "./pages/index";
// components
import Navbar from "./components/Navbar/Navbar";
// import Sidebar from "./components/Sidebar/Sidebar";
// import Footer from "./components/Footer/Footer";
// import store from "./store/store";
// import {Provider} from "react-redux";

function App() {
  return (
    <div className="App">
      {/* <Provider store = {store}> */}
        <BrowserRouter>
          <Navbar />
          {/* <Sidebar /> */}

          <Routes>
            {/* home page route */}
            <Route path = "/" element = {<Home />} />
            {/* single product route */}
            {/* <Route path = "/product/:id" element = {<ProductSingle />} /> */}
            {/* category wise product listing route */}
            {/* <Route path = "/category/:category" element = {<CategoryProduct />} /> */}
            {/* cart */}
            {/* <Route path = "/cart" element = {<Cart />} /> */}
            {/* searched products */}
            {/* <Route path = "/search/:searchTerm" element = {<Search />} /> */}
          </Routes>

          {/* <Footer /> */}
        </BrowserRouter>
      {/* </Provider> */}
    </div>
  );
}

export default App;

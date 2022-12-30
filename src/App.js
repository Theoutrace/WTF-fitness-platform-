import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import FooterTopStrip from "./components/footer/FooterTopStrip";
import Header from "./components/header/Header";
import GymDetails from "./pages/GymDetails";
import Gyms from "./pages/Gyms";
import { GymAction } from "./store/reducers/GymListReducer";
import data from "./json/Gyms.json";

function App() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(() => true);

    //================================== Api Call ======================================
    (async function fetchData() {
      const response = await fetch(
        "https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231"
      ).then((res) => res.json());
      dispatch(GymAction.addGyms(response.data));
      setLoader(() => false);
    })();

    //    //================================== If Api didnt work or deactivated ======================================
    // (async function fetchData() {
    //   dispatch(GymAction.addGyms(data.data));
    //   setLoader(() => false);
    // })();
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="pages-container">
        <Routes>
          {!loader && (
            <Route
              path="/gyms/"
              element={
                <>
                  <Gyms />
                  <FooterTopStrip />
                </>
              }
            />
          )}

          <Route path="/gyms/:id" element={<GymDetails />} />

          <Route
            path="*"
            element={
              <div>
                This page was not in assignment
                <br /> <h2>Go to Gyms option</h2>
              </div>
            }
          />
        </Routes>
        <div></div>
      </div>
    </div>
  );
}

export default App;

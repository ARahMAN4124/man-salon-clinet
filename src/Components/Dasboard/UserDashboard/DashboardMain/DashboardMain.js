import React from "react";
import { useContext } from "react";
import { myContext } from "../../../../App";
import "./DashboardMain.css";

const DashboardMain = () => {
  const [logInUser, setLogInUser] = useContext(myContext);
  return (
    <main className="dashboardMain">
      <div className="dashboardMenu d-flex justify-content-between">
        <div>
          <h2>Booking</h2>
        </div>
        <div className="logInUserImg mr-5">
          <img src={logInUser.photoURL} alt="" />
        </div>
      </div>
      <div className="dashboardOther">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum deleniti
          in nobis quod earum veniam? Suscipit debitis totam ducimus accusamus
          laboriosam qui. Aliquam rerum inventore incidunt esse, iusto minima
          harum. Laboriosam soluta cumque in commodi molestias quod nisi. Sed ut
          vero culpa vitae tempore eos blanditiis porro minima modi quaerat.
          Deleniti doloribus beatae quasi dolorem. Fugit architecto molestias
          enim, dolore ex, quos id, facere saepe consequuntur eius blanditiis
          aspernatur quibusdam error. Excepturi, autem et! Neque tenetur
          exercitationem, quia odit, cupiditate iure earum placeat ipsum autem
          ducimus aspernatur repellat voluptatibus reiciendis hic fugiat? Itaque
          quo odio incidunt architecto ea aperiam corrupti exercitationem id at
          totam accusantium quibusdam molestiae veniam ab ducimus commodi illum
          vel quia cum, placeat tenetur! Ratione eos numquam corrupti sit
          aspernatur praesentium, labore neque, dolorem error porro voluptates
          iusto quos ad? Eveniet, rem cumque ea dicta veniam nobis distinctio
          harum reprehenderit. Et consequatur magni fugit architecto tempora
          assumenda.
        </p>
      </div>
    </main>
  );
};

export default DashboardMain;

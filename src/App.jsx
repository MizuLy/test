import Darkmode from "./components/Darkmode";
import Data from "./components/Data";
import State from "./components/State";
import Ui from "./components/Ui";
import Home from "./Home";

import { users } from "./components/User";

export default function App() {
  return (
    <div>
      {/* <Data /> */}
      {/* <State /> */}
      {/* <Darkmode /> */}

      <div>
        {/* {users.map((user, index) => (
          <Ui
            key={index}
            name={user.name}
            title={user.title}
            status={user.status}
            image={user.image}
            bgImg={user.bgImg}
            bio={user.bio}
          />
        ))} */}
        <Ui
          name="Karina"
          title="Copy paste Developer"
          image="zamn.jpg"
          bgImg="Samurai.jpg"
          bio="I talk to ChatGPT more than I do with my family"
          status={0}
        />
      </div>
    </div>
  );
}

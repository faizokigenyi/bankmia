import React from "react";
import HeaderBox from "../../../components/ui/HeaderBox";
import TotalBalanceBox from "../../../components/ui/TotalBalanceBox";
import RightSideBar from "components/ui/RightSideBar";

const Home = () => {
  const loggedIn = {
    firstName: "Gonzales",
  };
  return (
    <section className="home">
      <div>
        <header className="home-content">
          <HeaderBox
            type="greeting"
            title="welcome"
            user={loggedIn?.firstName || " Guest  "}
            subtext=" Access and manage your accounts and transactions effortlessly."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250 - 35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSideBar user={loggedIn} transactions={[]} banks={[]} />
    </section>
  );
};

export default Home;

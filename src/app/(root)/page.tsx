import React from "react";
import HeaderBox from "../../components/ui/HeaderBox";
import TotalBalanceBox from "../../components/ui/TotalBalanceBox";
import RightSideBar from "@/components/ui/RightSideBar";

const Home = () => {
  const logggedIn = {
    firstName: "Mia",
    lastName: "Gonzales",
    email: "mia.gonzales@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={logggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSideBar
        user={logggedIn}
        transactions={[]}
        banks={[{ currentBalance: 25155.51 }, { currentBalance: 500 }]}
      />
    </section>
  );
};

export default Home;

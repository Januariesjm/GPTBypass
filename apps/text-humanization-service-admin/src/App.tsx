import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { HumanizationRequestList } from "./humanizationRequest/HumanizationRequestList";
import { HumanizationRequestCreate } from "./humanizationRequest/HumanizationRequestCreate";
import { HumanizationRequestEdit } from "./humanizationRequest/HumanizationRequestEdit";
import { HumanizationRequestShow } from "./humanizationRequest/HumanizationRequestShow";
import { MembershipList } from "./membership/MembershipList";
import { MembershipCreate } from "./membership/MembershipCreate";
import { MembershipEdit } from "./membership/MembershipEdit";
import { MembershipShow } from "./membership/MembershipShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TextHumanizationService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="HumanizationRequest"
          list={HumanizationRequestList}
          edit={HumanizationRequestEdit}
          create={HumanizationRequestCreate}
          show={HumanizationRequestShow}
        />
        <Resource
          name="Membership"
          list={MembershipList}
          edit={MembershipEdit}
          create={MembershipCreate}
          show={MembershipShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;

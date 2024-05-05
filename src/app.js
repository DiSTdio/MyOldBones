import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";

class App extends React.Component {
   
    render() {
        return (<div className="Users list">
            <Header title="Hat" name="fart" />
            <div className="main">
                <Users></Users>
            </div>
            <aside>
                <AddUser></AddUser>
            </aside>
        </div>)
    }

    
}

export default App
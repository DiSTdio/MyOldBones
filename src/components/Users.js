import React from "react";
import sampleObject1 from "../sampleObj/sampleObj1";
import sampleObject2 from "../sampleObj/sampleObj2";
import User from "./User";


class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [
                sampleObject1,
                sampleObject2,
            ]
        }
    }

    render() {
         if (this.state.users.length > 0){
            return (
                <div>
                    {this.state.users.map((element) => (
                        <User  key={element.id} user={element}/>
                    ))}
                </div>
                )
         }
         else    
            return (
                <div className="user-info">
                    <h3>No users</h3>
                </div>
            )
}

}



export default Users
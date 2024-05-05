import React from "react";
import { SlClose } from "react-icons/sl";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";


class User extends React.Component {
    user = this.props.user
    render() {
    return (
        <div className="user">
                       <IoCloseCircleSharp className="user-delete-icon" />
                       <IoHammerSharp className="user-edit-icon" />
                       <h3>{this.user.firstname} {this.user.lastname}</h3>
                        <p>{this.user.bio}</p>
                        <SlClose className="plus turning-cross"></SlClose>
                        <b>{this.user.isHappy ? 'Happy (＠＾◡＾)' : 'sad (つ . •́ _ʖ •̀ .)つ'}</b>
                    </div>
        )
}

}



export default User
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const UserDetails = ({userId, users}) => {
  
  const [user, setUser] =  useState({})

  useEffect(() => {
    setUser(users.find(x => x.id === userId));
  }, [userId, users]);

  return <div>
    Created By : {user?.name}
    </div>;
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps)(UserDetails);

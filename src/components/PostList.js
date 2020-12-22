import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUser } from "../actions";
import UserDetails from "./UserDetails";

class PostList extends Component {
  render() {
    return (
      <div>
        PostList
        <br />
        <br />
        <hr />
        {this.props.posts.map(({ id, title, body, userId }) => (
          <div key={id}>
            <h5>{title}</h5>
            <br />
            {body}
            <br />
            <UserDetails userId={userId} />
            <hr />
          </div>
        ))}
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchPostsAndUser();
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUser })(PostList);

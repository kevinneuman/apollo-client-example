import React, { Component } from 'react';
import LoadHandler from './LoadHandler';

class Users extends Component {
  renderComponent({ data: { users } }) {
    return (
      <div>
        <h1>Users</h1>

        {users.map(user =>
          <h3 key={user.id}>
            {user.username}
          </h3>
        )}
      </div>
    );
  }

  render() {
    return (
      <LoadHandler
        loading={this.props.data.loading}
        error={this.props.data.error}
        renderComponent={() => this.renderComponent(this.props)}
      />
    );
  }
}

export default Users;

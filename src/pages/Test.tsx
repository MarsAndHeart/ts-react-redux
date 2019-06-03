import * as React from 'react';
import get from 'get-value';
import { compose, Dispatch } from 'redux';
import { connect } from 'react-redux';
import userAction from '../actions/user';
import { User } from '../reducers/user';

interface IProps {
  username: string;
  setUser: (user: User) => void;
}
const Test = (props: IProps) => {
  const changename = (e: object) => {
    props.setUser({
      name: get(e, 'target.value')
    });
  };
  return (
    <div>
      <div>hello, {props.username}</div>
      <input value={props.username} onChange={changename} />
    </div>
  );
};

const propMapping = (store: object) => {
  const username = get(store, 'user.name');
  return {
    username
  };
};

const actionMapping = (dispatch: Dispatch) => {
  return {
    setUser: compose(
      dispatch,
      userAction.setUser
    )
  };
};

export default connect(
  propMapping,
  actionMapping
)(Test);

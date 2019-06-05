import * as React from 'react';
import get from 'get-value';
import { compose, Dispatch } from 'redux';
import { connect } from 'react-redux';
import testAction from '@actions/test';
import { IUser } from '@reducers/user';
import Button from 'antd-mobile/lib/button';
import styles from './style.scss';

interface IProps {
  username: string;
  getUserFromServer: () => void;
  setUser: (user: IUser) => void;
}
const Test = (props: IProps) => {
  const { username, getUserFromServer } = props;
  const changename = (e: React.FormEvent<HTMLInputElement>) => {
    props.setUser({
      name: e.currentTarget.value
    });
  };
  return (
    <div>
      <div>hello, {username}</div>
      <input value={username} onChange={changename} />
      <div>
        <Button inline onClick={getUserFromServer}>
          get user
        </Button>
      </div>
      <div className={styles.test}>
        <div style={{ width: 100, height: 100, backgroundColor: '#666699' }} />
      </div>
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
      testAction.setUser
    ),
    getUserFromServer: compose(
      dispatch,
      testAction.getUserFromServer
    )
  };
};

export default connect(
  propMapping,
  actionMapping
)(Test);

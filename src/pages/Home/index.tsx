import * as React from 'react';
import Button from 'antd-mobile/lib/button';
import styles from './style.scss';

const Home = () => {
  const submit = () => {
    // console.log('sth');
  };
  return (
    <div>
      <div>智能核保</div>
      <div>上一步</div>
      <div>
        <div>投保单号：2345465453245</div>
        <div>被保险人 小明 的职业与健康告知</div>
        <div>一些题目</div>
      </div>
      <div className={styles.footer}>
        <Button type="primary" onClick={submit}>
          确认
        </Button>
      </div>
    </div>
  );
};

export default Home;

import http from 'k6/http';
import { check, group, sleep, fail } from 'k6';

export const options = {
  vus: 1, // 1 user looping for 1 minute
  duration: '1m',

  thresholds: {
    http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
  },
};

const BASE_URL = 'http://localhost:8081';
const USERNAME = 'dylan';
const PASSWORD = 'password';

export default () => {
  const loginRes = http.post(`${BASE_URL}/auth/login`, {
    username: USERNAME,
    password: PASSWORD,
  });

  check(loginRes, {
    'logged in successfully': (resp) => resp.json('access') !== '',
  });

  const authHeaders = {
    headers: {
      Authorization: `Bearer ${loginRes.json('access')}`,
    },
  };

//   const myObjects = http.get(`${BASE_URL}/form`, authHeaders).json();
//   check(myObjects, { 'retrieved form': (obj) => obj.length > 0 });
 

  sleep(1);
};

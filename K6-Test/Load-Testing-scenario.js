import http from 'k6/http';
import { check, sleep } from 'k6';

//Load Testing scenario - simulating a normal day
export const options = {
    stages: [
      { duration: '5m', target: 6 }, // simulate ramp-up of traffic from 1 to 6 users over 5 minutes.
      { duration: '10m', target: 6 }, // stay at 6 users for 10 minutes
      { duration: '3m', target: 10}, // ramp-up to 10 users over 3 minutes (peak hour starts)
      { duration: '2m', target: 10 }, // stay at 10 users for short amount of time (peak hour)
      { duration: '3m', target: 6 }, // ramp-down to 6 users over 3 minutes (peak hour ends)
      { duration: '10m', target: 6 }, // continue at 6 for additional 10 minutes
      { duration: '5m', target: 0 }, // ramp-down to 0 users
    ],
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

  const myObjects = http.get(`${BASE_URL}/forum`, authHeaders).json();
  check(myObjects, { 'retrieved profile1': (obj) => obj.length > 0 });
 

  sleep(1);
};

import http from 'k6/http';
import { sleep } from 'k6';


//This test determine:
//1- How your system will perform under a sudden surge of traffic
//2-  If your system will recover once the traffic has subsided.

export const options = {
  stages: [
    { duration: '10s', target: 3 }, // below normal load
    { duration: '1m', target: 3 },
    { duration: '10s', target: 14 }, // spike to 14 users
    { duration: '3m', target: 14 }, // stay at 14 for 3 minutes
    { duration: '10s', target: 3 }, // scale down. Recovery stage.
    { duration: '3m', target: 3 },
    { duration: '10s', target: 0 },
  ],
};
export default function () {
  const BASE_URL = 'http://127.0.0.1:8081/'; // make sure this is not production

  const responses = http.batch([
    ['GET', `${BASE_URL}/board`, null, { tags: { name: 'Jobboard' } }],
    ['GET', `${BASE_URL}/entreprise`, null, { tags: { name: 'Offres d\'emploi' } }],
    ['GET', `${BASE_URL}/users`, null, { tags: { name: 'Ma communauté' } }],
    ['GET', `${BASE_URL}//users/2/profile`, null, { tags: { name: 'Mon profile' } }],
  ]);

  sleep(1);
}

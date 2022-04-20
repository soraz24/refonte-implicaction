import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '2m', target: 2 }, // below normal load
    { duration: '5m', target: 2 },
    { duration: '2m', target: 3 }, // normal load
    { duration: '5m', target: 3 },
    { duration: '2m', target: 4 }, // around the breaking point
    { duration: '5m', target: 4 },
    { duration: '2m', target: 5 }, // beyond the breaking point
    { duration: '5m', target: 5 },
    { duration: '10m', target: 0 }, // scale down. Recovery stage.
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

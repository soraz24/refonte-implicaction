import http from 'k6/http';
import { sleep } from 'k6';

//Soak test is determine to:
/*
- Verify that your system doesn't suffer from bugs or memory leaks, which result in a crash or restart after several hours of operation.
- Verify that expected application restarts don't lose requests.
- Find bugs related to race-conditions that appear sporadically.
- Make sure your database doesn't exhaust the allotted storage space and stops.
- Make sure your logs don't exhaust the allotted disk storage.
- Make sure the external services you depend on don't stop working after a certain amount of requests are executed. 

*/
export const options = {
  stages: [
    { duration: '2m', target: 2 }, // ramp up to 400 users
    { duration: '1h01m', target: 10 }, // stay at 400 for ~1 hours
    { duration: '2m', target: 0 }, // scale down. (optional)
  ],
};

const API_BASE_URL = 'http://127.0.0.1:8081';

export default function () {
  http.batch([
    ['GET', `${BASE_URL}/board`, null, { tags: { name: 'Jobboard' } }],
    ['GET', `${BASE_URL}/entreprise`, null, { tags: { name: 'Offres d\'emploi' } }],
    ['GET', `${BASE_URL}/users`, null, { tags: { name: 'Ma communauté' } }],
    ['GET', `${BASE_URL}//users/2/profile`, null, { tags: { name: 'Mon profile' } }],
  ]);

  sleep(1);
}

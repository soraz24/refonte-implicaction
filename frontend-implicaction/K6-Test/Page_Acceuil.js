import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('https://test.k6.io');
  //http.get('http://localhost:8081/');
  sleep(1);
}

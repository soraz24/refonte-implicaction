import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
 // http.get('http://localhost:8081/');
 http.get('http://127.0.0.1:8081/')
  sleep(1);
}

import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('https://virtuetechglobal.com/integrations/analytics/send-event');
  sleep(1);
}

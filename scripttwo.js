import http from 'k6/http';
import { check } from 'k6';
import { group } from 'k6';
import { scenario } from 'k6/execution';
import { SharedArray } from 'k6/data';
export const options = {
  scenarios: {
    'use-all-the-data': {
      executor: 'shared-iterations',
      vus: 2,
      iterations: 2,
      maxDuration: '5s',
    },
  },
};
export default function () {
 group('bot-load-details', function () {
  const url = 'https://cloud.yellow.ai/api/plugin/bot-load-details';
  const payload = JSON.stringify({"bot":"x1637146178196","linkType":"web","uid":"141064778548273529384236488516","source":"yellowmessenger","subSource":null,"payload":{"page_url":"c:pageurl.com/2358","page_category":"Digital Marketing","learner_id":"yellowtest++","vertical_name":"Digital Marketing","learner_email_id":"yellow@gmail.com","learner_name":"yellowtestcg","learner_phone":"90999999999","cohort_id":"2358","widgetVersion":"v2"},"pageUrl":"file:///Users/kiran/Downloads/example%20(2).html","loadEverywhere":false});
  const params = {
    headers: {
      'Content-Type': 'application/json'
    },
  };
 const res = http.post(url, payload, params);
//console.log(res.body)
 check(res, {
    'is status 200': (r) => r.status === 200,
             }
      );
});
 group('update-user-info', function () {
  const url = 'https://cloud.yellow.ai/api/plugin/update-user-info';
  const payload = JSON.stringify({"bot":"x1637146178196","uid":"141064778548273529384236488515","device":"desktop","ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36","source":"yellowmessenger","loadEverywhere":false,"payload":{"page_url":"c:pageurl.com/2358","page_category":"Digital Marketing","learner_id":"yellowtest++","vertical_name":"Digital Marketing","learner_email_id":"yellow@gmail.com","learner_name":"yellowtestcg","learner_phone":"90999999999","cohort_id":"2358","widgetVersion":"v2"},"url":"file:///Users/kiran/Downloads/example%20(2).html","isWelcomeMessagePresent":true,"referrer":"x1637146178196","pageUrl":"file:///Users/kiran/Downloads/example%20(2).html","shouldRefreshContext":false,"botType":"production","subscriptionId":5493,"subSource":null,"isYmAuth":false});
  const params = {
    headers: {
      'Content-Type': 'application/json'
    },
  };
 const res = http.post(url, payload, params);
//console.log(res.body)
 check(res, {
    'is status 200': (r) => r.status === 200,
             }
      );
});
 group('send_event_Others', function () {
  const url = 'https://cloud.yellow.ai/integrations/analytics/send-event';
  const payload = JSON.stringify({"event":"bot-qr-clicked","payload":{"title":"Others"},"botId":"x1637146178196","uid":"141064778548273529384236488515","source":"yellowmessenger","timestamp":"2022-10-12T07:09:38.413Z","pageURL":"about:blank"});
  const params = {
    headers: {
      'Content-Type': 'application/json'
    },
  };
 const res = http.post(url, payload, params);
//console.log(res.body)
 check(res, {
    'is status 200': (r) => r.status === 200,
             }
      );
});
 group('send_event_Feedback', function () {
  const url = 'https://cloud.yellow.ai/integrations/analytics/send-event';
  const payload = JSON.stringify({"event":"bot-qr-clicked","payload":{"title":"Feedback"},"botId":"x1637146178196","uid":"141064778548273529384236488515","source":"yellowmessenger","timestamp":"2022-10-12T07:11:37.455Z","pageURL":"about:blank"});
  const params = {
    headers: {
      'Content-Type': 'application/json'
    },
  };
 const res = http.post(url, payload, params);
//console.log(res.body)
 check(res, {
    'is status 200': (r) => r.status === 200,
             }
      );
});
 group('send_options_text', function () {
  const url = 'https://cloud.yellow.ai/api/status/x1637146178196';
  const payload = JSON.stringify({"payload":{"messageId":"634669c05444d30001130266","traceId":"141064778548273529384236488515_5r8U3WT9WbajFsKOdXiJe","source":"yellowmessenger","botType":"production","eventType":"user_received","timestamp":1665558975942}});
  const params = {
    headers: {
      'Content-Type': 'application/json'
    },
  };
 const res = http.post(url, payload, params);
//console.log(res.body)
 check(res, {
    'is status 200': (r) => r.status === 200,
             }
      );
});
}
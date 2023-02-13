
// K6 run -d 1m
// Product & Services
import http from 'k6/http';
import { check } from 'k6';
import { group } from 'k6';
import { scenario } from 'k6/execution';
import { SharedArray } from 'k6/data';

export const options = {
    scenarios: {
        'use-all-the-data': {
            executor: 'shared-iterations',
            vus: 20,
            iterations: 100,
            maxDuration: '2000s',
        },
    },
};

export default function () {

    group('bot-load-details', function () {

        const url = 'https://uatchatbot.affinalways.com/api/plugin/bot-load-details';
        const payload = "{\"bot\":\"x1665396635536\",\"linkType\":\"web\",\"uid\":\"1314210654606462012012290\",\"source\":\"yellowmessenger\",\"subSource\":null,\"payload\":{\"widgetVersion\":\"v2\"},\"pageUrl\":\"https://uatchatbot.affinalways.com/liveBot/x1665396635536\",\"loadEverywhere\":false}";
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

        const url = 'https://uatchatbot.affinalways.com/api/plugin/update-user-info'
        const payload = "{\"bot\":\"x1665396635536\",\"uid\":\"1314210654606462012012290\",\"device\":\"desktop\",\"ua\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36\",\"source\":\"yellowmessenger\",\"loadEverywhere\":false,\"payload\":{\"cookies\":{\"_ga\":\"GA1.1.1123795852.1665393140\"},\"widgetVersion\":\"v2\"},\"url\":\"https://uatchatbot.affinalways.com/liveBot/x1665396635536?region=\",\"isWelcomeMessagePresent\":true,\"referrer\":\"x1665396635536\",\"pageUrl\":\"https://uatchatbot.affinalways.com/liveBot/x1665396635536?region=\",\"botType\":\"sandbox\",\"subscriptionId\":4628,\"subSource\":null,\"isYmAuth\":false}";
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

    group('Open-bot-press-Home', function () {

        const url = 'https://uatchatbot.affinalways.com/integrations/analytics/send-event'
        const payload = "{\"event\":\"home-button-click\",\"payload\":{\"journey\":\"products-and-services_acgzeu\",\"step\":\"1c4ce22a61b610fd\"},\"botId\":\"x1665396635536\",\"uid\":\"1314210654606462012012290\",\"source\":\"yellowmessenger\",\"timestamp\":\"2022-11-21T06:50:30.674Z\",\"pageURL\":\"about:blank\"}";
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
    group('Click on product and services', function () {

        const url = 'https://uatchatbot.affinalways.com/integrations/yellowmessenger/receive?bottype=sandbox'
        const payload = "{\"from\":\"1314210654606462012012290\",\"to\":\"x1665396635536\",\"message\":\"{\\\"message\\\":\\\"See Products & Services\\\",\\\"interactionType\\\":\\\"quick-replies\\\",\\\"buttonClick\\\":true,\\\"source\\\":\\\"yellowmessenger\\\",\\\"subSource\\\":null,\\\"messageId\\\":1669013563762,\\\"pageUrl\\\":\\\"https://uatchatbot.affinalways.com/liveBot/x1665396635536?region=\\\",\\\"welcomeMessage\\\":{\\\"message\\\":[{\\\"quickReplies\\\":{\\\"title\\\":\\\"Okay Sanket, how can I help you today?\\\\n\\\\nYou can select a topic below or ask me a question. I'll do my best to find you an answer.\\\",\\\"options\\\":[{\\\"text\\\":\\\"See Products & Services\\\",\\\"title\\\":\\\"See Products & Services\\\",\\\"id\\\":\\\"quick_5606ccc8c133d160\\\"},{\\\"text\\\":\\\"See Promotions\\\",\\\"title\\\":\\\"See Promotions\\\",\\\"id\\\":\\\"quick_030ce646f0b5d335\\\"},{\\\"text\\\":\\\"Locate a Branch\\\",\\\"title\\\":\\\"Locate a Branch / ATM\\\",\\\"id\\\":\\\"quick_b1b018ca13d4af43\\\"},{\\\"text\\\":\\\"feedback\\\",\\\"title\\\":\\\"I've Got Feedback\\\",\\\"id\\\":\\\"quick_7059059a1da8da3b\\\"},{\\\"text\\\":\\\"\\\",\\\"title\\\":\\\"Change Language\\\",\\\"id\\\":\\\"quick_333d1aa0899204f9\\\"}]},\\\"hideInput\\\":false,\\\"targetLanguage\\\":\\\"en\\\",\\\"journeyId\\\":\\\"637afc70a77bbb5e35fe1408\\\",\\\"journeyName\\\":\\\"Main Menu\\\",\\\"journeySlug\\\":\\\"test_rhfpkz\\\",\\\"stepId\\\":\\\"637afc71a77bbba050fe1414\\\",\\\"stepName\\\":\\\"menu options\\\",\\\"stepSlug\\\":\\\"298c704d605e6e07\\\",\\\"bot\\\":\\\"x1665396635536\\\",\\\"traceId\\\":\\\"1314210654606462012012290_OC_QnFkGZoVDxx7ZpWFhn\\\"}],\\\"count\\\":1,\\\"latestCreated\\\":\\\"2022-11-21T06:50:31.926Z\\\"},\\\"richMessage\\\":{\\\"text\\\":\\\"See Products & Services\\\",\\\"title\\\":\\\"See Products & Services\\\"},\\\"isSensitiveInfo\\\":false}\",\"xmppNotUsed\":true}"
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
    group('Click on Existing products', function () {
        const url = 'https://uatchatbot.affinalways.com/integrations/yellowmessenger/receive?bottype=sandbox'
        const payload = "{\"from\":\"1314210654606462012012290\",\"to\":\"x1665396635536\",\"message\":\"{\\\"message\\\":\\\" Exciting Products\\\",\\\"interactionType\\\":\\\"quick-replies\\\",\\\"buttonClick\\\":true,\\\"source\\\":\\\"yellowmessenger\\\",\\\"subSource\\\":null,\\\"messageId\\\":1669013686803,\\\"pageUrl\\\":\\\"https://uatchatbot.affinalways.com/liveBot/x1665396635536?region=\\\",\\\"richMessage\\\":{\\\"text\\\":\\\" Exciting Products\\\",\\\"title\\\":\\\"Exciting Products\\\"},\\\"isSensitiveInfo\\\":false}\",\"xmppNotUsed\":true}";
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
    group('Click on Deposits', function () {
        const url = 'https://uatchatbot.affinalways.com/integrations/yellowmessenger/receive?bottype=sandbox'
        const payload = "{\"from\":\"1314210654606462012012290\",\"to\":\"x1665396635536\",\"message\":\"{\\\"message\\\":\\\"Deposits\\\",\\\"interactionType\\\":\\\"quick-replies\\\",\\\"buttonClick\\\":true,\\\"source\\\":\\\"yellowmessenger\\\",\\\"subSource\\\":null,\\\"messageId\\\":1669013771324,\\\"pageUrl\\\":\\\"https://uatchatbot.affinalways.com/liveBot/x1665396635536?region=\\\",\\\"richMessage\\\":{\\\"text\\\":\\\"Deposits\\\",\\\"title\\\":\\\"Deposits\\\"},\\\"isSensitiveInfo\\\":false}\",\"xmppNotUsed\":true}";
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
    group('Click on Deposits services', function () {
        const url = 'https://uatchatbot.affinalways.com/integrations/yellowmessenger/receive?bottype=sandbox'
        const payload = "{\"from\":\"1314210654606462012012290\",\"to\":\"x1665396635536\",\"message\":\"{\\\"message\\\":\\\"Deposit Services\\\",\\\"interactionType\\\":\\\"quick-replies\\\",\\\"buttonClick\\\":true,\\\"source\\\":\\\"yellowmessenger\\\",\\\"subSource\\\":null,\\\"messageId\\\":1669013926746,\\\"pageUrl\\\":\\\"https://uatchatbot.affinalways.com/liveBot/x1665396635536?region=\\\",\\\"richMessage\\\":{\\\"text\\\":\\\"Deposit Services\\\",\\\"title\\\":\\\"Deposit Services\\\"},\\\"isSensitiveInfo\\\":false}\",\"xmppNotUsed\":true}";
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
    group('Click on FD/TD-i Placement', function () {
        const url = 'https://uatchatbot.affinalways.com/integrations/yellowmessenger/receive?bottype=sandbox'
        const payload = "{\"from\":\"1314210654606462012012290\",\"to\":\"x1665396635536\",\"message\":\"{\\\"message\\\":\\\"FD/TD-i Placement\\\",\\\"interactionType\\\":\\\"quick-replies\\\",\\\"buttonClick\\\":true,\\\"source\\\":\\\"yellowmessenger\\\",\\\"subSource\\\":null,\\\"messageId\\\":1669013955899,\\\"pageUrl\\\":\\\"https://uatchatbot.affinalways.com/liveBot/x1665396635536?region=\\\",\\\"richMessage\\\":{\\\"text\\\":\\\"FD/TD-i Placement\\\",\\\"title\\\":\\\"FD/TD-i Placement\\\"},\\\"isSensitiveInfo\\\":false}\",\"xmppNotUsed\":true}";
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
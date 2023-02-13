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

        const url = 'https://virtuetechglobal.com/liveBot/x1661764941397?region=';
        const payload = JSON.stringify({ "bot": "x1661764941397", "linkType": "web", "uid": "644455455500443071934114", "source": "yellowmessenger", "subSource": null, "payload": { "widgetVersion": "v2" }, "pageUrl": "https://virtuetechglobal.com/liveBot/x1661764941397", "loadEverywhere": false });
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

        const url = 'https://virtuetechglobal.com/api/plugin/update-user-info'
        const payload = JSON.stringify({ "bot": "x1661764941397", "uid": "644455455500443071934114", "device": "desktop", "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36", "source": "yellowmessenger", "loadEverywhere": false, "payload": { "cookies": { "_ga": "GA1.2.1519669468.1668666745" }, "widgetVersion": "v2" }, "url": "https://virtuetechglobal.com/liveBot/x1661764941397?region=", "isWelcomeMessagePresent": true, "referrer": "x1661764941397", "pageUrl": "https://virtuetechglobal.com/liveBot/x1661764941397?region=", "botType": "sandbox", "subscriptionId": 10734, "subSource": null, "isYmAuth": false });
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

        const url = 'https://virtuetechglobal.com/integrations/analytics/send-event'
        const payload = JSON.stringify({ "event": "home-button-click", "payload": { "journey": "test_rhfpkz", "step": "298c704d605e6e07" }, "botId": "x1661764941397", "uid": "644455455500443071934114", "source": "yellowmessenger", "timestamp": "2022-11-17T08:28:40.583Z", "pageURL": "about:blank" });
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
    group('Click on Locate a Branch / ATM', function () {

        const url = 'https://virtuetechglobal.com/integrations/yellowmessenger/receive?bottype=sandbox'
        const payload = JSON.stringify({ "from": "644455455500443071934114", "to": "x1661764941397", "message": "{\"message\":\"Locate a Branch\",\"interactionType\":\"quick-replies\",\"buttonClick\":true,\"source\":\"yellowmessenger\",\"subSource\":null,\"messageId\":1668674781314,\"pageUrl\":\"https://virtuetechglobal.com/liveBot/x1661764941397?region=\",\"welcomeMessage\":{\"message\":[{\"quickReplies\":{\"title\":\"Okay Kiran, how can I help you today?\\n\\nYou can select a topic below or ask me a question. I'll do my best to find you an answer.\",\"options\":[{\"text\":\"See Products & Services\",\"title\":\"See Products & Services\",\"advancedSettings\":false,\"id\":\"quick_5606ccc8c133d160\"},{\"text\":\"See Promotions\",\"title\":\"See Promotions\",\"advancedSettings\":false,\"id\":\"quick_030ce646f0b5d335\"},{\"text\":\"Locate a Branch\",\"title\":\"Locate a Branch / ATM\",\"advancedSettings\":false,\"id\":\"quick_b1b018ca13d4af43\"},{\"text\":\"feedback\",\"title\":\"I've Got Feedback\",\"advancedSettings\":false,\"id\":\"quick_7059059a1da8da3b\"},{\"text\":\"\",\"title\":\"Change Language\",\"advancedSettings\":false,\"id\":\"quick_333d1aa0899204f9\"}]},\"journeyName\":\"Main Menu\",\"journeySlug\":\"test_rhfpkz\",\"bot\":\"x1661764941397\",\"stepId\":\"6310a9fe5524b73678d2c60d\",\"stepName\":\"menu options\",\"stepSlug\":\"298c704d605e6e07\",\"targetLanguage\":\"en\",\"_id\":\"6375f4d910cca700957ae2ae\",\"timestamp\":1668674777531,\"traceId\":\"644455455500443071934114_MFNySP0Y8xMGDoU7iAUEj\"}],\"count\":1,\"latestCreated\":\"2022-11-17T08:46:18.273Z\"},\"richMessage\":{\"text\":\"Locate a Branch\",\"title\":\"Locate a Branch / ATM\"},\"isSensitiveInfo\":false}", "xmppNotUsed": true });
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
    group('Click on Nearest location', function () {
        const url = 'https://virtuetechglobal.com/integrations/yellowmessenger/receive?bottype=sandbox'
        const payload = JSON.stringify({ "from": "644455455500443071934114", "to": "x1661764941397", "message": "{\"message\":\"Nearest Location\",\"interactionType\":\"quick-replies\",\"buttonClick\":true,\"source\":\"yellowmessenger\",\"subSource\":null,\"messageId\":1668674862072,\"pageUrl\":\"https://virtuetechglobal.com/liveBot/x1661764941397?region=\",\"richMessage\":{\"text\":\"Nearest Location\",\"title\":\"Nearest Locations\"},\"isSensitiveInfo\":false}", "xmppNotUsed": true });
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
    group('Click on Allow Access', function () {
        const url = 'https://virtuetechglobal.com/integrations/yellowmessenger/receive?bottype=sandbox'
        const payload = JSON.stringify({ "from": "644455455500443071934114", "to": "x1661764941397", "message": "{\"location\":{\"lat\":12.9728512,\"lng\":77.594624},\"source\":\"yellowmessenger\",\"subSource\":null,\"messageId\":1668675209822,\"pageUrl\":\"https://virtuetechglobal.com/liveBot/x1661764941397?region=\",\"richMessage\":{\"title\":\"Allow Access\"},\"isSensitiveInfo\":false}", "xmppNotUsed": true });
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
    group('Click on Yes', function () {
        const url = 'https://virtuetechglobal.com/integrations/yellowmessenger/receive?bottype=sandbox'
        const payload = JSON.stringify({ "from": "644455455500443071934114", "to": "x1661764941397", "message": "{\"message\":\"yes\",\"interactionType\":\"quick-replies\",\"buttonClick\":true,\"source\":\"yellowmessenger\",\"subSource\":null,\"messageId\":1668675295778,\"pageUrl\":\"https://virtuetechglobal.com/liveBot/x1661764941397?region=\",\"richMessage\":{\"text\":\"yes\",\"title\":\"Yes\"},\"isSensitiveInfo\":false}", "xmppNotUsed": true });
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
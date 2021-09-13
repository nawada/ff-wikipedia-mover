const matched = location.href.match(/(.+)(m\.)(wikipedia.+)/);
location.replace([matched[1], matched[3]].join(''));

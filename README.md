Source of app code: https://gist.github.com/thearegee/3eea038b9f0c5e94de73f3c3482fa732

Documentation of `cluster` module form nodejs documentation:
https://nodejs.org/api/cluster.html#clusterismaster.

Amazing, Genuine article about load testing *IMO: https://dev.to/ku6ryo/benchmarking-next-js-on-fastify-custom-server-mg4

Another nice article for using pm2: https://medium.com/@tzilist/clustering-node-js-with-pm2-with-benchmarking-e3a7daf792ba

Another fork I made from a benchmarking repo for pm2 for clustertesting: https://github.com/sahilrajput03/pm2_clustering_test

## Load test commands:

```bash
# Make 15k concurrent requests for 5 seconds
autocannon -c 15000 -d 5 localhost:8123
# Output: So it takes around 13 seconds to complete and total of around
# 115k requests.

# Make 1L requests, 20k concurrency.
ab -n 100000 -c 20000 http://localhost:8123/

# Make 10k each from 10 users (i.e., 10k concurrency, total of 1L requests).
artillery quick --count 10 --num 10000 http://localhost:8123/
```

For insights about testing tools: 

visit: https://www.npmtrends.com/ab-vs-artillery-vs-autocannon-vs-loadtest-vs-wrk

- Install testing tools:

	- `ab`: Apache Bench `sudo pacman -S apache` (for archlinux)
	- `autocannon`: `npm i -g autocannon`
	- `artillery` : `npm i -g artillery`
---

- **Fixing ab's eror of too many files open**: Max what i can set is `ulimit -n 100000` i.e., a maximum of 1 lakhs open file descriptions
limit can be set. FYI: YOu can see the help for ulimit @ ```ulimit
--help```.

	Source: https://stackoverflow.com/a/1504603/10012446

	~Sahil: This was helpful to get rid of error from ab i.e., too many files are
opened. Yikes!! FYI: I ran above command in stackoverflow with value
like 100000 so it can handle that many file descriptions, yikes!

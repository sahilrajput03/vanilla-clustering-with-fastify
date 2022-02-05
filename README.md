Source of app code: https://gist.github.com/thearegee/3eea038b9f0c5e94de73f3c3482fa732


## load test commands:

```
ab -n 100000 -c 20000 http://localhost:8123/

artillery quick --count 10 --num 10000 http://localhost:8123/
```

For insights about testing tools: 

visit: https://www.npmtrends.com/ab-vs-artillery-vs-autocannon-vs-loadtest-vs-wrk

---

- **Fixing ab's eror of too many files open**

Max what i can set is `ulimit -n 100000` i.e., a maximum of 1 lakhs open file descriptions
limit can be set. FYI: YOu can see the help for ulimit @ ```ulimit
--help```.

Source: https://stackoverflow.com/a/1504603/10012446

~Sahil: This was helpful to get rid of error from ab i.e., too many files are
opened. Yikes!! FYI: I ran above command in stackoverflow with value
like 100000 so it can handle that many file descriptions, yikes!

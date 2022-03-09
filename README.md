# mvp-demo
Demo Script for MVP

How to run 
* Install node version 14 or later
* Install [nvm](https://github.com/nvm-sh/nvm) 
```javascript
npm install
nvm use 14
npm run index.js
```


# Run everything locally

* Run IPFS 

```bash
docker run --name ipfs_host -v $ipfs_staging:/export -v $ipfs_data:/data/ipfs -p 4001:4001 -p 0.0.0.0:8080:8080 -p 0.0.0.0:5001:5001 ipfs/go-ipfs:lates
```

* Run Trust Alliance node

```
docker run  -p 0.0.0.0:9933:9933 -p 0.0.0.0:9944:9944 -p 0.0.0.0:30333:30333 trustalliance/trust-node:v0.0.1 --dev --tmp --ws-external
```
* TrackBack Agent connection configuration 
```node
const options = {
        url: "ws://192.168.1.111:9944",
        options: {...DefaultOptions.options}
    };

    const fileConn = new DecentralisedFileStoreConnector(
        {
            url: "http://192.168.1.111:3000",
            api: "/api/0.1/",
            decentralisedStoreURL: "http://192.168.1.111:8080/ipfs/"
        }
    );

    const connector = new Connector((options));
    const agent = new TrackBackAgent(connector, fileConn);
```
* Build the MVP Demo docker image

```bash
docker build -t mvp_demo . 
```


* Run and log in to the `mvp-demo`  container
```bash
docker run --rm -it aa /bin/sh
```

* Run the application
```bash
~/app $ node index.js
```

* You will see an output similar to this 

```bash
➜  mvp-demo git:(main) ✗ docker run --rm -it mvp-demo /bin/sh
~/app $ node index.js 
Unable to map u16 to a lookup index
Unable to map u16 to a lookup index
Unable to map u16 to a lookup index
Unable to map u16 to a lookup index
Unable to map u16 to a lookup index
Unable to map u16 to a lookup index
Unable to map u16 to a lookup index
Unable to map u16 to a lookup index
Unable to map u16 to a lookup index
CredentialIssuer {
  id: 'did:trackback:32d9a574-0eed-4ad8-bd5a-5df21f41e3b5',
  keypair: JsonWebKey2020 {
    id: 'did:trackback:key:JsonWebKey2020:cWSCewPhBIbcQ0anVEltUkZf8i8fq_wLEA1gGd3xeDM#cWSCewPhBIbcQ0anVEltUkZf8i8fq_wLEA1gGd3xeDM',
    type: 'JsonWebKey2020',
    controller: 'did:trackback:key:JsonWebKey2020:cWSCewPhBIbcQ0anVEltUkZf8i8fq_wLEA1gGd3xeDM',
    publicKeyJwk: {
      kty: 'OKP',
      crv: 'Ed25519',
      x: '5PlEu3BhES3-kPOgt0TJcEoj_BkSXbVudazkEErBE20',
      alg: 'EdDSA'
    },
    privateKeyJwk: {
      kty: 'OKP',
      crv: 'Ed25519',
      x: '5PlEu3BhES3-kPOgt0TJcEoj_BkSXbVudazkEErBE20',
      d: 'IbswMPgujDfvtqn_fSWlLeHp7c8SJ0QCrkJ3ZFh8rhM',
      alg: 'EdDSA'
    }
  },
  credentialBuilder: CredentialBuilder {
    _context: [ 'https://www.w3.org/2018/credentials/v1' ],
    _type: Set(0) {}
  }
}
Finalised Block Hash {"dispatchInfo":{"weight":0,"class":"Normal","paysFee":"Yes"},"events":[{"phase":{"applyExtrinsic":1},"event":{"index":"0x0900","data":["0x6469643a30783734373236313633366236323631363336623a333333323634333936313335333733343264333036353635363432643334363136343338326436323634333536313264333536343636333233313636333433313635333336323335","5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"]},"topics":[]},{"phase":{"applyExtrinsic":1},"event":{"index":"0x0000","data":[{"weight":0,"class":"Normal","paysFee":"Yes"}]},"topics":[]}],"status":{"finalized":"0xb0552faa010d0a10c29ec78d5096d9478097ca9d5a9aa9c84e582381d74676d6"}}
{
  '@context': [ 'https://www.w3.org/ns/did/v1' ],
  id: 'did:trackback:32d9a574-0eed-4ad8-bd5a-5df21f41e3b5',
  verificationMethod: [
    {
      id: 'did:trackback:key:JsonWebKey2020:cWSCewPhBIbcQ0anVEltUkZf8i8fq_wLEA1gGd3xeDM#cWSCewPhBIbcQ0anVEltUkZf8i8fq_wLEA1gGd3xeDM',
      controller: 'did:trackback:key:JsonWebKey2020:cWSCewPhBIbcQ0anVEltUkZf8i8fq_wLEA1gGd3xeDM',
      type: 'JsonWebKey2020',
      publicKeyJwk: [Object]
    }
  ]
}
{
  '@context': [ 'https://www.w3.org/2018/credentials/v1' ],
  type: [ 'VerifiableCredential' ],
  issuanceDate: '2010-01-01T19:23:24Z',
  credentialSubject: { name: 'Test', surname: 'Test Test' },
  issuer: 'did:trackback:32d9a574-0eed-4ad8-bd5a-5df21f41e3b5'
}
eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCIsImtpZCI6ImRpZDp0cmFja2JhY2s6a2V5Okpzb25XZWJLZXkyMDIwOmNXU0Nld1BoQkliY1EwYW5WRWx0VWtaZjhpOGZxX3dMRUExZ0dkM3hlRE0jY1dTQ2V3UGhCSWJjUTBhblZFbHRVa1pmOGk4ZnFfd0xFQTFnR2QzeGVETSJ9.eyJpc3MiOiJkaWQ6dHJhY2tiYWNrOjMyZDlhNTc0LTBlZWQtNGFkOC1iZDVhLTVkZjIxZjQxZTNiNSIsIm5iZiI6MTI2MjM3MzgwNCwidmMiOnsiQGNvbnRleHQiOlsiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvdjEiXSwidHlwZSI6WyJWZXJpZmlhYmxlQ3JlZGVudGlhbCJdLCJpc3N1YW5jZURhdGUiOiIyMDEwLTAxLTAxVDE5OjIzOjI0WiIsImNyZWRlbnRpYWxTdWJqZWN0Ijp7Im5hbWUiOiJUZXN0Iiwic3VybmFtZSI6IlRlc3QgVGVzdCJ9LCJpc3N1ZXIiOiJkaWQ6dHJhY2tiYWNrOjMyZDlhNTc0LTBlZWQtNGFkOC1iZDVhLTVkZjIxZjQxZTNiNSJ9fQ.8mE9Ct-gpeC6aCjxUJXrDiRU4iXwLTHGIhT13o74lqOh7nQVeRAXHQUwfYcjXARWvv903CQAc-k31gAg76huDw
eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCIsImtpZCI6ImRpZDp0cmFja2JhY2s6a2V5Okpzb25XZWJLZXkyMDIwOmNXU0Nld1BoQkliY1EwYW5WRWx0VWtaZjhpOGZxX3dMRUExZ0dkM3hlRE0jY1dTQ2V3UGhCSWJjUTBhblZFbHRVa1pmOGk4ZnFfd0xFQTFnR2QzeGVETSJ9.eyJuYmYiOjE2NDY4MTI4MTIsImlzcyI6ImRpZDp0cmFja2JhY2s6MzJkOWE1NzQtMGVlZC00YWQ4LWJkNWEtNWRmMjFmNDFlM2I1IiwidnAiOnsiQGNvbnRleHQiOlsiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvdjEiXSwidHlwZSI6WyJWZXJpZmlhYmxlUHJlc2VudGF0aW9uIl0sInZlcmlmaWFibGVDcmVkZW50aWFsIjpbImV5SmhiR2NpT2lKRlpFUlRRU0lzSW5SNWNDSTZJa3BYVkNJc0ltdHBaQ0k2SW1ScFpEcDBjbUZqYTJKaFkyczZhMlY1T2twemIyNVhaV0pMWlhreU1ESXdPbU5YVTBObGQxQm9Ra2xpWTFFd1lXNVdSV3gwVld0YVpqaHBPR1p4WDNkTVJVRXhaMGRrTTNobFJFMGpZMWRUUTJWM1VHaENTV0pqVVRCaGJsWkZiSFJWYTFwbU9HazRabkZmZDB4RlFURm5SMlF6ZUdWRVRTSjkuZXlKcGMzTWlPaUprYVdRNmRISmhZMnRpWVdOck9qTXlaRGxoTlRjMExUQmxaV1F0TkdGa09DMWlaRFZoTFRWa1pqSXhaalF4WlROaU5TSXNJbTVpWmlJNk1USTJNak0zTXpnd05Dd2lkbU1pT25zaVFHTnZiblJsZUhRaU9sc2lhSFIwY0hNNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TVRndlkzSmxaR1Z1ZEdsaGJITXZkakVpWFN3aWRIbHdaU0k2V3lKV1pYSnBabWxoWW14bFEzSmxaR1Z1ZEdsaGJDSmRMQ0pwYzNOMVlXNWpaVVJoZEdVaU9pSXlNREV3TFRBeExUQXhWREU1T2pJek9qSTBXaUlzSW1OeVpXUmxiblJwWVd4VGRXSnFaV04wSWpwN0ltNWhiV1VpT2lKVVpYTjBJaXdpYzNWeWJtRnRaU0k2SWxSbGMzUWdWR1Z6ZENKOUxDSnBjM04xWlhJaU9pSmthV1E2ZEhKaFkydGlZV05yT2pNeVpEbGhOVGMwTFRCbFpXUXROR0ZrT0MxaVpEVmhMVFZrWmpJeFpqUXhaVE5pTlNKOWZRLjhtRTlDdC1ncGVDNmFDanhVSlhyRGlSVTRpWHdMVEhHSWhUMTNvNzRscU9oN25RVmVSQVhIUVV3ZlljalhBUld2djkwM0NRQWMtazMxZ0FnNzZodUR3Il19fQ.iU1CN7cOa_vib2o-suSfKub5479615hLQviEsNU-jWS75XEZYj1U6jEqyOMvXzFo-XM2qvqKQg2WVsrmX3kiCw
Unable to map u16 to a lookup index
Unable to map u16 to a lookup index
Unable to map u16 to a lookup index
Unable to map u16 to a lookup index
Unable to map u16 to a lookup index
Unable to map u16 to a lookup index
Unable to map u16 to a lookup index
Unable to map u16 to a lookup index
Unable to map u16 to a lookup index
CredentialVerifier {}
Unable to map u16 to a lookup index
Unable to map u16 to a lookup index
Unable to map u16 to a lookup index
Unable to map u16 to a lookup index
Unable to map u16 to a lookup index
Unable to map u16 to a lookup index
Unable to map u16 to a lookup index
Unable to map u16 to a lookup index
Unable to map u16 to a lookup index
true
```

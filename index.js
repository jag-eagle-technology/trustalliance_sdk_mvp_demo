const {
    CredentialIssuer,
    Connector,
    TrackBackAgent,
    CredentialVerifier,
    DecentralisedFileStoreConnector,
    DefaultOptions,
} = require('@trackback/agent')

async function demo() {
    /**
     * Pass the trust alliance node URL here
     */
    const options = {
        // Add host IP if you are running using docker
        url: process.env.NODE_URL,
        options: { ...DefaultOptions.options },
    }

    /**
     * Pass the IPFS connector URL and
     * IPFS host URL here
     */
    const fileConn = new DecentralisedFileStoreConnector({
        // Add host IP if you are running using docker
        url: process.env.IPFS_API_BASE_URL,
        api: '/api/0.1/',
        // Add host IP if you are running using docker
        decentralisedStoreURL: process.env.IPFS_STORE_URL,
    })

    const connector = new Connector(options)
    const agent = new TrackBackAgent(connector, fileConn)

    const account = await connector.getDefaultAccount()

    const context = {
        agent,
        account: account,
    }

    const issuer = await CredentialIssuer.build()
    console.log(issuer)

    const metada = { 'content-type': 'application/json' }
    const resMetada = { 'content-type': 'application/json' }

    const result = await issuer.save(context, metada, resMetada)
    console.log(result)

    const credential = {
        '@context': ['https://www.w3.org/2018/credentials/v1'],
        type: ['VerifiableCredential'],
        issuanceDate: '2010-01-01T19:23:24Z',
        credentialSubject: { name: 'Test', surname: 'Test Test' },
        issuer: issuer.id,
    }

    console.log(credential)
    const jwt = await issuer.createVerifiableCredentials(credential)

    console.log(jwt)
    // Issuer creates a verifiable credential presentation
    const jwtPresentation = await issuer.createVerifiablePresentation(
        [jwt],
        issuer.keypair
    )

    console.log(jwtPresentation)

    const accountB = await connector.getDefaultAccount('Bob')
    const contextB = {
        agent,
        account: accountB,
    }
    const verifier = new CredentialVerifier()
    console.log(verifier)
    const r = await verifier.verifyPresentation(jwtPresentation, contextB)
    console.log(r)
}

demo()

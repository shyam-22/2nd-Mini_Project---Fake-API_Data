
//this 1st data related to UI Part
//options are Category -->Address,commerce,database, date,finance,git,hacker
export const options = {
    address: {
      zipCode: "",
      zipCodeByState: "",
      city: "",
      cityPrefix: "",
      citySuffix: "",
      streetName: "",
      streetAddress: "",
      streetSuffix: "",
      streetPrefix: "",
      secondaryAddress: "",
      county: "",
      country: "",
      countryCode: "",
      state: "",
      stateAbbr: "",
      latitude: "",
      longitude: "",
      direction: "",
      cardinalDirection: "",
      ordinalDirection: "",
      nearbyGPSCoordinate: "",
      timeZone: "",
    },
    commerce: {
      color: "",
      department: "",
      productName: "",
      price: "",
      productAdjective: "",
      productMaterial: "",
      product: "",
      productDescription: "",
    },
    database: { column: "", type: "", collation: "", engine: "" },
    date: {
      past: "",
      future: "",
      between: "",
      recent: "",
      soon: "",
      month: "",
      weekday: "",
    },
    finance: {
      account: "",
      accountName: "",
      routingNumber: "",
      mask: "",
      amount: "",
      transactionType: "",
      currencyCode: "",
      currencyName: "",
      currencySymbol: "",
      bitcoinAddress: "",
      litecoinAddress: "",
      creditCardNumber: "",
      creditCardCVV: "",
      ethereumAddress: "",
      iban: "",
      bic: "",
      transactionDescription: "",
    },
    git: {
      branch: "",
      commitEntry: "",
      commitMessage: "",
      commitSha: "",
      shortSha: "",
    },
    hacker: {
      abbreviation: "",
      adjective: "",
      noun: "",
      verb: "",
      ingverb: "",
      phrase: "",
    },
    helpers: {
      randomize: "",
      slugify: "",
      replaceSymbolWithNumber: "",
      replaceSymbols: "",
      replaceCreditCardSymbols: "",
      repeatString: "",
      regexpStyleStringParse: "",
      shuffle: "",
      mustache: "",
      createCard: "",
      contextualCard: "",
      userCard: "",
      createTransaction: "",
    },
    image: {
      image: "",
      avatar: "",
      imageUrl: "",
      abstract: "",
      animals: "",
      business: "",
      cats: "",
      city: "",
      food: "",
      nightlife: "",
      fashion: "",
      people: "",
      nature: "",
      sports: "",
      technics: "",
      transport: "",
      dataUri: ""   
    },
    internet: {
      avatar: "",
      email: "",
      exampleEmail: "",
      userName: "",
      protocol: "",
      url: "",
      domainName: "",
      domainSuffix: "",
      domainWord: "",
      ip: "",
      ipv6: "",
      userAgent: "",
      color: "",
      mac: "",
      password: "",
    },
    lorem: {
      word: "",
      words: "",
      sentence: "",
      slug: "",
      sentences: "",
      paragraph: "",
      paragraphs: "",
      text: "",
      lines: "",
    },
    company: {
      suffixes: "",
      companyName: "",
      companySuffix: "",
      catchPhrase: "",
      bs: "",
      catchPhraseAdjective: "",
      catchPhraseDescriptor: "",
      catchPhraseNoun: "",
      bsAdjective: "",
      bsBuzz: "",
      bsNoun: "",
    },
    name: {
      firstName: "",
      lastName: "",
      findName: "",
      jobTitle: "",
      gender: "",
      prefix: "",
      suffix: "",
      title: "",
      jobDescriptor: "",
      jobArea: "",
      jobType: "",
    },
    phone: { phoneNumber: "", phoneNumberFormat: "", phoneFormats: "" },
    random: {
      number: "",
      float: "",
      arrayElement: "",
      arrayElements: "",
      objectElement: "",
      uuid: "",
      boolean: "",
      word: "",
      words: "",
      image: "",
      locale: "",
      alpha: "",
      alphaNumeric: "",
      hexaDecimal: "",
    },
    system: {
      fileName: "",
      commonFileName: "",
      mimeType: "",
      commonFileType: "",
      commonFileExt: "",
      fileType: "",
      fileExt: "",
      directoryPath: "",
      filePath: "",
      semver: "",
    },
  };
  
//this 2nd data related to User's_Choice-----> What type of data they want
  export const dataTemplate = {
    address: {},
    commerce: {},
    database: {},
    date: {},
    finance: {},
    git: {},
    hacker: {},
    helpers: {},
    image: {},
    internet: {},
    lorem: {},
    company: {},
    name: {},
    phone: {},
    random: {},
    system: {},
  };
# Memorex

Memorex is a [Chrome Extension](https://chrome.google.com/webstore/detail/memorex/emppbpgjhjnmodccaldkfcmocoefjbgp) 
that helps you memorize and practice anything, by randomly feeding you bite sizes of information.

All contributions to the code base and the knowledge base are appreciated. 

Please follow the structure of the following structure for your json file, to be accepted as a knowledge source. 

The file name should be the same as the slug, as well.

```
[
  {
    "title": "Some Title",
    "slug": "someSlug",
    "values": [
      {
        "value": "SomeWord \n itsMeaning"
      },
      {
        "value": "someTextToRemember"
      },
      ...
    ]
  }
]
```
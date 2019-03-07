# Memorex

Memorex is a [Chrome Extension](https://www.google.com) that helps you memorize and practice by randomly feeding you bite sizes of information.

All contributions to the code based and the knowledge base are appreciated. 

Please follow the structure of the following structure for your json file, to be accepted as a knowledge source. 

The file name should be the same as the slug, as well.

```
[
  {
    "title": "Some Title",
    "slug": "someSlug",
    "values": [
      {
        "value": "SomeValue \n AdditionalValue"
      },
      {
        "value": "AnotherValue"
      },
      ...
    ]
  }
]
```
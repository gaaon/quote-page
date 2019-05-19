import {deserialize} from "serializr";
import {Person, Quote} from "../";

describe('Models', () => {
  test('deserialize quote without creator.', () => {
    const objectId = '53cb6b9b4f4ddef1ad47f943';
    const content = "test quote";

    const quote = deserialize(Quote, {
      content: content,
      _id: objectId
    });

    const expectedQuote = new Quote(objectId, content);
    expect(quote).toEqual(expectedQuote);
  });

  test('deserialize quote with creator.', () => {
    const objectId = '53cb6b9b4f4ddef1ad47f943';
    const content = 'test quote';

    const creatorId = '5cd68bafc7aea21afeb8461d';
    const creatorFullName = 'Albert Einstein';
    const creatorLink = '/authors/albert_einstein';

    const quote = deserialize(Quote, {
      content: content,
      _id: objectId,
      creator: {
        _id: creatorId,
        fullName: creatorFullName,
        link: creatorLink,
      }
    });

    const expectedQuote = new Quote(objectId, content,
      new Person(creatorId, creatorFullName, creatorLink));
    expect(quote).toEqual(expectedQuote);
  });

  test('deserialize person.', () => {
    const creatorId = '5cd68bafc7aea21afeb8461d';
    const creatorFullName = 'Albert Einstein';
    const creatorLink = '/authors/albert_einstein';

    const person = deserialize(Person, {
      _id: creatorId,
      fullName: creatorFullName,
      link: creatorLink,
    });

    const expectedPerson = new Person(creatorId, creatorFullName, creatorLink);
    expect(person).toEqual(expectedPerson);
  });
});
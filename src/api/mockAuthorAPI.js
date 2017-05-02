import delay from './delay';

const authors = [
{
  id: 'cory-house',
  firstName: 'Cory',
  lastName: 'House'
},
{
  id: 'scott-allen',
  firstName: 'Scott',
  lastName: 'Allen'
},
{
  id: 'dan-wahlin',
  firstName: 'Dan',
  lastName: 'Wahlin'
}
];

const generateID = (author) =>  {
  return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
}

class AuthorApi {
  static getAllAuthors()  {
    return new Promise((resolve, reject)  =>  {
      setTimeout(() =>  {
        resolve(Object.assign([], authors));
      }, delay);
    });
  }

  static saveAuthor(author) {
  author = Object.assign({}, author);
    return new Promise((resolve, reject)  =>  {
      setTimeout(() =>  {
        const minAuthorNameLength = 3;
        if(author.firstName.length < minAuthorNameLength) {
          reject(`First name must be atleast ${minAuthorNameLength} characters long`)
        }
        if(author.lastName.length < minAuthorNameLength)  {
          reject(`Last name must be atleast ${minAuthorNameLength} characters long`)
        }
        if(author.id) {
          const existingAuthorIndex = authors.findIndex(a  =>  a.id == author.id);
          authors.splice(existingAuthorIndex, 1, author)
        } else {
          author.id = generateID(author);
          authors.push(author)
        }

        resolve(author);
      }, delay);
    });
  }

  static deleteAuthor(authorID) {
    return new Promise((resolve, reject)  =>  {
      setTimeout(() =>  {
        const indexOfAuthorToDelete = authors.findIndex(author  =>  {
          author.id == authorID;
        });
        authors.splice(indexOfAuthorToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default AuthorApi

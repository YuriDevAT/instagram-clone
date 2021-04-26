export function seedDatabase(firebase) {
    const users = [
      {
        userId: 'awIW8IpjhtQ2Awe06Xq5YSQqFGE3',
        username: 'yuri',
        fullName: 'Yuri Dev',
        emailAddress: 'horrorkid1408@gmx.at',
        following: ['2'],
        followers: ['2', '3', '4'],
        dateCreated: Date.now()
      },
      {
        userId: '2',
        username: 'miyazaki',
        fullName: 'Hayao Miyazaki',
        emailAddress: 'hayaomiyazaki@ghibli.com',
        following: [],
        followers: ['awIW8IpjhtQ2Awe06Xq5YSQqFGE3'],
        dateCreated: Date.now()
      },
      {
        userId: '3',
        username: 'hisaishi',
        fullName: 'Joe Hisaishi',
        emailAddress: 'hisaishi@music.com',
        following: [],
        followers: ['awIW8IpjhtQ2Awe06Xq5YSQqFGE3'],
        dateCreated: Date.now()
      },
      {
        userId: '4',
        username: 'kitano',
        fullName: 'Takeshi Kitano',
        emailAddress: 'takeshi@kitano.com',
        following: [],
        followers: ['awIW8IpjhtQ2Awe06Xq5YSQqFGE3'],
        dateCreated: Date.now()
      }
    ];
  
      for (let k = 0; k < users.length; k++) {
      firebase.firestore().collection('users').add(users[k]);
    }
  
      for (let i = 1; i <= 5; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: '2',
          imageSrc: `/images/users/raphael/${i}.jpg`,
          caption: 'Saint George and the Dragon',
          likes: [],
          comments: [
            {
              displayName: 'dali',
              comment: 'Love this place, looks like my animal farm!'
            },
            {
              displayName: 'orwell',
              comment: 'Would you mind if I used this picture?'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        });
    }
  }
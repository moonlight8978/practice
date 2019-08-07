export default [
  {
    id: 1,
    members: [
      {
        id: 1,
        fullname: 'Member 1',
        avatar: '/sample-avatar-300x300.jpg',
      },
      {
        id: 2,
        fullname: 'Member 2',
        avatar: '/sample-avatar-300x300.jpg',
      },
    ],
    lastMessage: {
      id: 1,
      content: 'Sample message',
      creator: {
        id: 1,
        fullname: 'Member 1',
        avatar: '/sample-avatar-300x300.jpg',
      },
    },
  },
  {
    id: 2,
    members: [
      {
        id: 1,
        fullname: 'Member 1',
        avatar: '/sample-avatar-300x300.jpg',
      },
      {
        id: 3,
        fullname: 'Member 3',
        avatar: '/sample-avatar-300x300.jpg',
      },
    ],
    lastMessage: {
      id: 2,
      content: 'Sample message',
      creator: {
        id: 3,
        fullname: 'Member 3',
        avatar: '/sample-avatar-300x300.jpg',
      },
    },
  },
]

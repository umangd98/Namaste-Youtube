export function generateRandomName() {
    const firstNames = ['Alice', 'Bob', 'Charlie', 'David', 'Emma', 'Frank', 'Grace', 'Hannah', 'Ivy', 'Jack'];
    const lastNames = ['Smith', 'Johnson', 'Brown', 'Davis', 'Wilson', 'Lee', 'Clark', 'Hall', 'Wright', 'Adams'];
  
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  
    return `${randomFirstName} ${randomLastName}`;
  }


export function generateRandomMessage() {
    const messages = [
      'Hello, how are you today?',
      'Have a great day!',
      'Coding is fun!',
      'Smile, it\'s a beautiful day.',
      'Learning new things is exciting!',
      'Life is an adventure.',
      'Make the most of every moment.',
      'Believe in yourself!',
      'You\'ve got this!',
      'The only limit is your imagination.',
      'Success is a journey, not a destination.',
      'Dream big and work hard.',
      'Stay positive and keep smiling.',
      'Every day is a chance to learn something new.',
      'Chase your dreams with passion.',
      'The future belongs to those who believe in the beauty of their dreams.',
      'Be the change you want to see in the world.',
      'Kindness is a language that the deaf can hear and the blind can see.',
      'In the middle of every difficulty lies opportunity.',
      'The only way to do great work is to love what you do.'
    ];
  
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
    return randomMessage;
  }
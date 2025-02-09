import { AboueMeImple } from './AboutMeImple';

describe('AboueMeImple', () => {
  it('should return the correct name and student ID', () => {
    let AboutMe = new AboueMeImple(); 
    expect(AboutMe.me()).toBe('Supachok Kiddee 66026178');
  });
});

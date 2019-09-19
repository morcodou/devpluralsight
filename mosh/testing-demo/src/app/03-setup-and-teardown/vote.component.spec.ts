import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {

  let component;
  beforeEach(() => {
    component = new VoteComponent();
  })

  it('should increment totalvotes when upvoted', () => {
    component = new VoteComponent();
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalvotes when downvoted', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });
});
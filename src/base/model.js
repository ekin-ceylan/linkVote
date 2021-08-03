export class link {
    title;
    url;
    vote;
    createDate;
    lastVoteDate;

    constructor() {
        this.vote = 0;
        this.createDate = null;
        this.lastVoteDate = null;
        this.title = '';
        this.url = '';
    }
}

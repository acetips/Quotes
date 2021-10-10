export class Quote {
    showquoteDetails: boolean;
    constructor(public title:string,public description:string,public author:string,public submitter:string){
        this.showquoteDetails=false;
    }
}

// type Inference
let tvShow = 'TMKOC';
tvShow = false; //typeScript is inferring the value itself and won't allow boolean.. Does not stop compiling to JS though

//Any type

let helloMate: any = 'Hello';
helloMate = () => {
	return 'Hello';
};
//ts does not complain anything on this.

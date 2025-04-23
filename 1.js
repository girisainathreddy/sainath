function* simplegenerator(){
    yield1;
    yield2;
    yield3;

}
const gen=simplegenerator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
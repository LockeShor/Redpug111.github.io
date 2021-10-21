myStorage = window.localStorage;

if(!myStorage.getItem('sam')) {
    myStorage.setItem('sam', 'hogan?')
    console.log("created sam! :)")
}
console.log(myStorage.getItem('sam'))
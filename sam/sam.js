myStorage = window.localStorage;

if(!myStorage.getItem('sam')) {
    myStorage.setItem('sam', 'hogan?')
}
console.log(myStorage.getItem('sam'))
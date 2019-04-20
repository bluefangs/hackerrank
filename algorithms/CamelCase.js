// Complete the camelcase function below.
function camelcase(s) {
    let found = 1;
    for (let i = 0; i < s.length; i++){
        if (s[i] == s[i].toUpperCase()) {
            found++;
        }
    }

    return found;
}

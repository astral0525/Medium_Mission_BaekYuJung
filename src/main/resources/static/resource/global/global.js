function getUrlParams(urlString){
    const url = new URL(urlString);
    const queryParams = new URLSearchParams(url.search);

    const params = {};

    for(let[key, value] of queryParams.entries()){
        params[key] = value;
    }
    return params;
}
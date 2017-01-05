window.addEventListener('load', function (){
    

});



let ajax = {
    get: function (url, show) {
        let request = new XMLHttpRequest;
         request.open('GET', url);
         request.addEventListener('load', function (){
        let response = JSON.parse(request.responseText);

        show(response);
    });
    request.send();
    },
    post: function () {

    },
};

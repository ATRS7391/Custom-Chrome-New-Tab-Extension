let image_urls = [
    './assets/media/background-images/1.jpg',
    './assets/media/background-images/2.jpg',
    './assets/media/background-images/3.jpg',
    './assets/media/background-images/4.jpg',
    './assets/media/background-images/5.jpg',
    './assets/media/background-images/6.jpg',
    './assets/media/background-images/7.jpg',
    './assets/media/background-images/8.jpg',
    './assets/media/background-images/9.jpg',
    './assets/media/background-images/10.jpg',
    './assets/media/background-images/11.jpg',
    './assets/media/background-images/12.jpg',
];


document.addEventListener('DOMContentLoaded', function () {
    let random_image_index = Math.floor(Math.random() * image_urls.length);
    document.getElementById('container-main').style.backgroundImage = 'url(' + image_urls[random_image_index] + ')';

    document.getElementById("search").addEventListener("keydown", function (e) {
        if (e.code === "Enter" || e.code === "NumpadEnter") {
            search();
        }
    });

    time_now();
}, false);


function search() {
    let query = document.getElementById("search").value;
    if (query.replace(/\s/g, '').length) {
        if (!is_valid_url(query)) {
            query = "https://www.google.com/search?q=" + query;
        }
        window.location.replace(query);
    }
}


function is_valid_url(_string) {
    const match_pattern = /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/;
    return match_pattern.test(_string);
}

function time_now() {
    let time = new Date();
    document.getElementById('time-now').innerHTML = time.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });
    setTimeout(time_now, 1000);
}

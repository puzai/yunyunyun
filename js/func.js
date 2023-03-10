function openTV() {
    window.open("https://live.bilibili.com/24032025");
}

function searchByName() {
    table = document.getElementById("songList");
    let ele;
    while ((ele = table.firstChild)) {
        ele.remove();
    }

    input = document.getElementById("songName").value.toUpperCase();

    songCnt = 1;

    for (var key in songs) {
        if (key.toUpperCase().indexOf(input) > -1) {
            for (var datas in songs[key]) {
                let lis = document.createElement('li')
                lis.setAttribute('id', 'song' + songCnt);
                lis.setAttribute('class', 'list-group-item list-group-item-light');
                lis.setAttribute('onclick', 'copySong(this)');
                lis.innerHTML = songs[key][datas];
                table.appendChild(lis);
                songCnt++;
            }
        }
        else {
            for (var datas in songs[key]) {
                if (songs[key][datas].toUpperCase().indexOf(input) > -1) {
                    let lis = document.createElement('li')
                    lis.setAttribute('id', 'song' + songCnt);
                    lis.setAttribute('class', 'list-group-item list-group-item-light');
                    lis.setAttribute('onclick', 'copySong(this)');
                    lis.innerHTML = songs[key][datas];
                    table.appendChild(lis);
                    songCnt++;
                }
            }
        }
    }
}

var songCnt = 1;
function randomSong() {
    if (songCnt == 1)
        return;

    setTimeout(() => {
    }, 0);

    let index = Math.floor((Math.random() * songCnt)) + 1;
    copySong(document.getElementById('song' + index));
}

function getSongs() {
    table = document.getElementById("songList");
    let ele;
    while ((ele = table.firstChild)) {
        ele.remove();
    }

    songCnt = 1;

    for (var key in songs) {
        console.log(key);
        for (var datas in songs[key]) {
            let lis = document.createElement('li');
            lis.setAttribute('id', 'song' + songCnt);
            lis.setAttribute('class', 'list-group-item list-group-item-light');
            lis.setAttribute('onclick', 'copySong(this)');
            lis.innerHTML = songs[key][datas];
            table.appendChild(lis);
            songCnt++;
        }
    }
}
getSongs();

function copySong(name) {
    var songname = name.innerText;
    name.setAttribute("data-clipboard-text", "?????? " + songname);
    copytext(name);
    var toast = new auiToast();
    toast.success({
        title: "????????????",
        duration: 1000
    });
}

function copytext(data) {
    var clipboard = new ClipboardJS(data);// ????????????????????? bootstrap???????????????????????? 
    clipboard.on('success', function (e) {
        clipboard.destroy();
    });
    clipboard.on('error', function (e) {
        console.log(e);
        clipboard.destroy();
    });
    data.click();
}
let data = [
    {
        name: 'Mike',
        age: '17'
    },
    {
        name: 'Will',
        age: '17'
    },
    {
        name: 'Lucas',
        age: '17'
    },
    {
        name: 'Dustin',
        age: '17'
    },
    {
        name: 'Eleven',
        age: '17'
    },
    {
        name: 'Max',
        age: '17'
    },
];

const info = document.querySelector('#info')

let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';

});

info.innerHTML = details.join('\n')
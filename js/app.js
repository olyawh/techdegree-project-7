//send button//

const send = document.querySelector('.send');
const search = document.getElementById('search');
const textarea = document.getElementById('textarea');

send.addEventListener('click', () => {
 if(search.value === '' && textarea.value === ''){
     alert('Please choose a member and type a message');
 } else if(search.value === '') {
   alert('Please choose a member');
 } else if(textarea.value === ''){
     alert('Please type a message');
 } else {
     alert('Your message has been sent');
    
 }

})



//Line Chart

var myChart = document.getElementById('myChart').getContext('2d');
var trafficChart = new Chart(myChart, {
    type: 'line', 
    data: {
        labels:['16-22', '23-29', '30-5', '6-12', '16-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'], 
        datasets:[{
            label:'Hourly Daily Weekly Monthly',
            data:[
                1622,
                2329,
                305,
                612,
                1319,
                2026,
                273,
                410,
                550,
                890,
                908
            ]
        }],

    },
    options: {
        legend: {
            position: 'top'
        }
    }
}); 

//BarChart 


var myChart = document.getElementById('barChart').getContext('2d');
var barChart = new Chart(myChart, {
    type: 'bar', 
    data: {
        labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], 
        datasets:[{
            label:'Daily traffic',
            data:[
                162,
                232,
                30,
                61,
                131,
                202,
                56,
            ],
        backgroundColor: '#b19cd9',
        }],

    },
    options: {
        legend: {
            display: false
        }
    }
}); 

//DonutChart

var myChart = document.getElementById('donutChart').getContext('2d');
var donutChart = new Chart(myChart, {
    type: 'pie', 
    data: {
        labels:['Phones', 'Tablets', 'Desktop'], 
        datasets:[{
            label:'Mobile Users',
            data:[
                162,
                232,
                30,
            ],
        backgroundColor:[ 
            '#b19cd9',
            '#72E5BE',
            '#99D099'
        ]
        }],

    },
    options: {
        legend: {
            position: 'right'
        }
    }
}); 
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});



// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .menu-icon');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})

const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bi-search');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bi-search', 'bi-x');
		} else {
			searchButtonIcon.classList.replace('bi-x', 'bi-search');
		}
	}
})

if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bi-x', 'bi-search');
	searchForm.classList.remove('show');
}

window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bi-x', 'bi-search');
		searchForm.classList.remove('show');
	}
})

const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})

const allMenu = document.querySelectorAll('main .content-data');

allMenu.forEach(item=> {
	const icon = item.querySelector('.material-icons-outlined');
	const menuLink = item.querySelector('.menu-link');

	icon.addEventListener('click', function () {
		menuLink.classList.toggle('show');
	})
})


// APEXCHART cho Follower rate
var options1 = {
    series: [{
        name: 'Facebook',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'Twitter',
        data: [11, 32, 45, 32, 34, 52, 41]
    },
    {
        name: 'Instagram',
        data: [21, 12, 55, 30, 43, 51, 61]
    }],
    
    chart: {
        height: 350,
        type: 'area'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        categories: ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'] 
    },
    tooltip: {
        x: {
            format: 'yyyy'
        },
    },
};

var followerChart = new ApexCharts(document.querySelector("#followerChart"), options1);
followerChart.render();


// APEXCHART cho Viewer
var options2 = {
    series: [76, 67, 61, 90],
    chart: {
        height: 390,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
                margin: 5,
                size: '30%',
                background: 'transparent',
                image: undefined,
            },
            dataLabels: {
                name: {
                    show: false,
                },
                value: {
                    show: false,
                }
            },
            barLabels: {
                enabled: true,
                useSeriesColors: true,
                offsetX: -8,
                fontSize: '16px',
                formatter: function(seriesName, opts) {
                    return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                },
            },
        }
    },
    colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
    labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                show: false
            }
        }
    }]
};

var viewerChart = new ApexCharts(document.querySelector("#viewerChart"), options2);
viewerChart.render();

// APEXCHART cho Profit
var options3 = {
	series: [{
		data: [400, 690, 1100, 1200, 1380]
	  }],
		chart: {
		type: 'bar',
		height: 350
	  },
	  plotOptions: {
		bar: {
		  borderRadius: 4,
		  borderRadiusApplication: 'end',
		  horizontal: true,
		}
	  },
	  dataLabels: {
		enabled: false
	  },
	  xaxis: {
        categories: ['Facebook', 'Twitter', 'LinkedIn', 'TikTok', 'Instagram'],
        labels: {
            formatter: function(val) {
                return `$${val}`; // Thêm ký hiệu $ vào nhãn trên trục x
            }
        }
    },
    tooltip: {
        y: {
            formatter: function(val) {
                return `$${val}`; 
            }
        }
    }
};


// Khởi tạo biểu đồ
var profitChart = new ApexCharts(document.querySelector("#profitChart"), options3);
profitChart.render();









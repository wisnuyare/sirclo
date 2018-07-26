new Vue({
    el: '#vue-app',
    data: {
        date: '',
        max: '',
        min: '',
        variance: '',
        average: '',
        meanMax: 0,
        meanMin: 0,
        meanVar: 0,
        tampung: []
    },
    methods: {
        ambil: function(){
            const data = {
                date: this.date,
                max: this.max,
                min: this.min,
                variance: this.max-this.min,
            }
            this.tampung.push(data)
            var total = this.tampung.length;
            var totalmax = 0;
            var totalmin = 0;
            var totalvar = 0;
            for(i = 0; i< total; i++){
                totalmax = +this.tampung[i].max + +totalmax;
                totalmin = +this.tampung[i].min + +totalmin;
                totalvar = +this.tampung[i].variance + +totalvar;
            }
            this.meanMax = totalmax/total;
            this.meanMin = totalmin/total;
            this.meanVar = totalvar/total;
        },
        detail: function(e){
            this.max = e.max;
            localStorage.setItem("simpan", e.max);
            this.date = e.date;
            localStorage.setItem("simpan1", e.date);
            this.min = e.min;
            localStorage.setItem("simpan2", e.min);
            this.variance = e.variance;
            localStorage.setItem("simpan3", e.variance);
            window.location.href = 'detail.html';
        }
    },
    
})
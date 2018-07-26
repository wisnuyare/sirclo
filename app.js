new Vue({
    el: '#vue-app',
    data: {
        nomorhp: '',
        message: '',
        whatsapp: '',
        angka: 0,
        ini1: [],
        ini2: [],
        arr: []
    },
    methods: {
        //    tambah: function() {
        //     this.whatsapp = '<a href=https://wa.me/' + this.nomorhp + '/?text=' +this.message +'> Ini Adalah WA</a>'
        //    },
        //    pesan: function(){
        //     var mess = this.message.replace(' ', '%20')
        //     this.whatsapp = '<a href=https://wa.me/' + this.nomorhp + '/?text=' + mess +'> Ini Adalah WA</a>'
        //    },
        calc: function () {
            x = this.angka;
            for (i = 0; i < x; i++) {
                var kedua = +this.angka - 1;
                for (j = 0; j < 2; j++) {
                    this.ini1.push(kedua);
                }

                var tambahan = +this.angka + 1;
                for (j = 0; j < +this.angka; j++) {
                    this.ini2.push(tambahan);
                }
                
                console.log(this.ini2)
                
                const data ={
                    hasil: this.ini1+this.ini2
                }
                this.arr.push(data)
                console.log(data)
                this.ini1 = [];
                this.ini2 = [];
                +this.angka --;
            }
        },
    }
});
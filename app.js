new Vue({
    el: '#vue-app',
    data: {
        barang: '',
        qty: '',
        index: '',
        hasilnya: true,
        button: 'Show Cart',
        cart: [],
    },
    methods: {
        tambah: function () {
            const data = {
                barang: this.barang,
                qty: this.qty
            }
            var count = this.cart.length;
            if (count != 0 && hasilcari !== true) {
                for (var i = 0; i < count; i++) {
                    if (this.cart[i].barang === this.barang) {
                       
                        var hasilcari = false;
                        this.cart[i].qty = +this.qty + +this.cart[i].qty
                        break;
                    } else {
                        var hasilcari = true;
                    }
                }
            }
            if (hasilcari === true || count === 0) {
                this.cart.push(data);
            }
        },
        kurang: function () {
            const data = {
                barang: this.barang,
                qty: this.qty
            }
            var count = this.cart.length;
            if (count != 0) {
                for (var i = 0; i < count; i++) {
                    if (this.cart[i].barang === this.barang) {
                        var hasilcari = false;
                        var totalqty = +this.cart[i].qty - +this.qty
                        this.cart[i].qty = totalqty
                        if(totalqty<1){
                            this.cart.splice([i], 1)
                        }
                    } 
                }
            }
        }        
    }
})
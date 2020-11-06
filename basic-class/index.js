// Class adalah blueprint atau sebuah rancangan yang nantinya akan menjadi sebuah object
// di dalam class terdapat sebuah property dan method , property bisa kita ibaratkan sebuah variabel dan method bisa diibaratkan sebuah function

class Kucing {
    nama = 'Meow'
    mata = 2
    kaki = 4

    makan(){
        console.log(`${this.nama} sedang makan`)
    }
    
}

const kucing = new Kucing();

kucing.makan()

class Order{
    static value = 4

    static plusValue(){
        console.log(`value berjumlah ${value + 1}`)
    }

    static minValue(){
        console.log('value berjumlah:', this.value - 1)
    }

}

// console.log(typeof Order.minValue())
const total = Order.value + 4
console.log(total)
const {createApp,ref}  = Vue;

var myService = createApp({
    data() {
        return{
            Services:[
                {icon: "fa-shopping-cart", heading:"E-Commerce", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."},
                {icon: "fa-laptop", heading:"Responsive Design", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."}
            ]
        }
    }
}).mount("#services");


var vueProfolio = createApp({
    data() {
        return{
            Portfolio:[]
        }
    }
}).mount("#portfolio")

$.ajax({
    url:"http://localhost:5500/profolio",
    method: "get",
    dataType: "json",
    success: results=>{
        vueProfolio.Portfolio = results;
    }

})
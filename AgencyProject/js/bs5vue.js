const { createApp, ref } = Vue;

// var myService = createApp({
//     data() {
//         return{
//             Services:[
//                 {icon: "fa-shopping-cart", heading:"E-Commerce", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."},
//                 {icon: "fa-laptop", heading:"Responsive Design", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."}
//             ]
//         }
//     }
// }).mount("#services");


// var vueProfolio = createApp({
//     data() {
//         return {
//             Portfolio: []
//         }
//     }
// }).mount("#portfolio")

// $.ajax({
//     url: "/portfolio",
//     method: "get",
//     dataType: "json",
//     success: results => {
//         vueProfolio.Portfolio = results;
//     }

// })

var VueGallery = createApp({
    data() {
        return {
        galleryData: [], // 存放作品資料的陣列
        }
    },
    mounted() {
        // 在實例被創建之後執行，通常用來發送獲取資料的請求
        this.fetchgalleryData();

    },
    methods: {
        fetchgalleryData() {
            // 使用 Ajax 或其他方法向後端發送請求，並將資料設置到 works 中
            // 這裡假設你的後端提供了一個 /api/works 的 API
            fetch("/glry")
                .then((response) => response.json())
                .then((data) => {
                    this.galleryData = data; // 將後端傳回的資料設置到 works 中
                })
                .catch((error) => {
                    console.error("Error fetching galley data:", error);
                });
        },
    },
}).mount("#gallerysc");
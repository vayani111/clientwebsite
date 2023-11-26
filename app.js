function signin(){
  window.location.href = "login.html"
}
var cardArr = [
  {
    id: 0,
    image:
      "image/product1.jfif",
    title: "RADO WATCH",
    des: "NEW ARRIVAL DAY ND DATE WORKING STEEL CHAIN FLEXIBLE CHAIN ND ADJUSTABLE LOCK ATTRACTIVE DIALS👌 FOR MEN  👨🏻‍🦱RS.2000 WITH BOX 📦"
  },
  {
    id: 1,
    image:
      "image/product2.jfif",
    title: "VITZ COUPLE WATCH",
    des: "✨NEW ARRIVAL ✨LADIES ND GENTS COUPLE ✨STONE CASE ✨STEEL CHAIN ✨4 ATTRACTIVE COLOURS RS 1800 PAIR"
  }
  ,{
    id: 2,
    image:
      "image/product3.jfif",
    title: "YSL Saint Laurent Slipper + YSL CrossBody Bag",
    des: "   High Quality Size :- 36 To 42 CrossBody Bag 💼 With Long Chain Slipper & Bag With Brand Box With Brand Paper Bag 🛍️ Combo Price Rs.3400" },
    {
      id: 3,
      image:
        "image/product4.jfif",
      title: "🎀 Prada 3 Partition Bag for Girls 🎀",
      des: " 🔸 Stylish Shoulder Style 🔸 3 Partition 🔸 Long Strap  Good Quality 🔸 Material : Soft Leather WATCH VIDEO 🔥(Price Just Rs. 2500/- Only)🔥 "},
    {
      id: 4,
      image:
        "image/product5.jfif",
      title: "🎀  Branded MK Cross Body BaG 🎀",
      des: "✨ 💯 A+quality ✨ With coin pouch ✨ Unique style ✨ With long belt ✨ Material :Pu leather ✨ Colors : 6 ( Price Just : 2700 Rs )"},
    {
      id: 5,
      image:
        "image/product6.jfif",
      title: " 🎀 4 Pcs Light Weigh Imported Bag Set 🎀",
      des: " 🔸 Sticker Included 🔸 Small Pouches 🔸 Light Weight 🔸 Material : Parachute 🔸 Front Pocket 🔸 WATCH VIDEO 💫  Inside Pockets 🔥(Price Just Rs. 2700/- Only)🔥" },
      {
        id: 6,
        image:
          "image/product7.jfif",
        title: "🎀 Luxury Mini Size Hand Wallets For Womens 🎀",
        des: " ✨ A+ Imported High Quality ✨ Size : MINI ✨ You Can Put Money & Cards ✨ 2 In 1 Style Mini Wallet ✨ Origin : imported ✨ Luxury & Stylish ✨ Colors : 7 ( Price Just : 1200 Rs Each Only)"
      },
      {
        id: 7,
        image:
          "image/product8.jfif",
        title: "Versace 2 Pcs Super Soft Material Bag Set for Girls ",
        des: " 🔸 Stylish Shoulder Style 🔸 Small Pouch 🔸 Long Strap 🔸 Good Quality 🔸 Material : Super soft Leather WATCH VIDEO 💫  2 PCS SET  🔥(Price Just Rs. 2700/- Only)🔥"
      },
      {
        id: 8,
        image:
          "image/product9.jfif",
        title: " 🎀 Charles  & Keith 5 Pcs Bag Set for Girls 🎀",
        des: "   ✨ Good Quality  ✨ Daimond Lock  ✨ Cloud Bag with Chain ✨ Small Wallet With Chain  ✨ Card Wallet  ✨ Long Strap ✨ Material : Soft Leather  ✨ Colors : 8  🔥( Price Just : 2500 Rs. Only )" },
     
      
];

// // console.log(cardArr);

var cardCon = document.getElementById("cardContent");

for (var i = 0; i < cardArr.length; i++) {
  var image = cardArr[i].image;
  var title = cardArr[i].title;
  var description = cardArr[i].des;
  var id = cardArr[i].id;
  //   console.log(image);
  cardCon.innerHTML += `
  <div class="card m-2" style="width: 18rem" id="cart">
        <img
          src=${image}
          class="card-img-top"
          alt="..."
          height="160px"
        />
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">
            ${description}
          </p>
          <a href="#" class="btn btn-primary" onclick=(cart(${id}))>Add to Cart</a>
        </div>
      </div>
      </div>
      </div>
  `;
}
var arr = [];
function cart(index) {
  //   console.log(index);
  console.log(cardArr[index]);
  var sendingObj = cardArr[index];
  arr.push(sendingObj);
  //   console.log(arr);
  localStorage.setItem("cartData", JSON.stringify(arr));
}
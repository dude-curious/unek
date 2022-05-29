const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const nodemailer = require('nodemailer');
const port=process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/static'));
app.set('view engine','ejs');


var mailData;

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/home.html');
})

app.get('/place',(req,res)=>{
    res.sendFile(__dirname+'/place.html');
})


app.get('/orders-shimoga',function(req,res){
    res.sendFile(__dirname+'/orders-shimoga.html');
})

app.get('/orders-bangalore/hostel',function(req,res){
    res.sendFile(__dirname+'/orders-bangalore-hostel.html');
})
app.get('/orders-bangalore/home',function(req,res){
    res.sendFile(__dirname+'/orders-bangalore-home.html');
})

app.post('/cart-shimoga',function(req,res){
   let data=Object.entries(req.body);
   mailData=data;
    data[0].push(35);
    data[1].push(20);
    data[2].push(20);
    data[3].push(30);
    data[4].push(15);
    data[5].push(25);
    data[6].push(210);
    data[7].push(100);
    data[8].push(5);
    data[9].push(15);
    data[10].push(8);
    res.render('cart',{data:data,place:0});
})

app.post('/cart-bangalore/hostel',function(req,res){
    let data=Object.entries(req.body);
    mailData=data;
     data[0].push(40);
     data[1].push(25);
     data[2].push(25);
     data[3].push(40);
     data[4].push(25);
     data[5].push(50);
     data[6].push(350);
     data[7].push(250);
     data[8].push(6);
     data[9].push(15);
     data[10].push(20);
     data[11].push(25);
     data[12].push(35);
     data[13].push(10);
     data[14].push(15);
     data[15].push(190);
     data[16].push(8);
     res.render('cart',{data:data,place:1});
 })
app.post('/cart-bangalore/home',function(req,res){
    let data=Object.entries(req.body);
    mailData=data;
     data[0].push(55);
     data[1].push(30);
     data[2].push(30);
     data[3].push(55);
     data[4].push(40);
     data[5].push(60);
     data[6].push(380);
     data[7].push(280);
     data[8].push(8);
     data[9].push(15);
     data[10].push(20);
     data[11].push(25);
     data[12].push(40);
     data[13].push(15);
     data[14].push(20);
     data[15].push(230);
     data[16].push(8);
     data[17].push(250);
     data[18].push(430);

     res.render('cart',{data:data,place:2});
 })

app.post('/order-placed-shimoga',(req,res)=>{
    

    // create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: 'unekcustomercare@gmail.com', // generated ethereal user
        pass: 'cdjwpjsoscqkeqya'  // generated ethereal password
    }
  });
  var mailingList=['nabeelnov77@gmail.com','shariffsharif27@gmail.com','ziyanzaid77@gmail.com']
  // setup email data with unicode symbols
  let mailOptions = {
      from: 'unekcustomercare@gmail.com', // sender address
      to: mailingList, // list of receivers
      subject: 'New order(Shimoga)', // Subject line
      text: `New Order`, // plain text body
      html:`<p>Name : ${req.body.name}</p>
      <p>Number : ${req.body.number}</p>
      <p>Address : ${req.body.address}</p>
      <p>Shirt and pant(pair) : ${mailData[0][1]}</p>
      <p>Shirt : ${mailData[1][1]}</p>
      <p>Pant : ${mailData[2][1]}</p>
      <p>Dresses : ${mailData[3][1]}</p>
      <p>Bed Cover (Single) : ${mailData[4][1]}</p>
      <p>Bed Cover (Double) : ${mailData[5][1]}</p>
      <p>Blankets(Big) : ${mailData[6][1]}</p>
      <p>Blankets(Small) : ${mailData[7][1]}</p>
      <p>Pillow : ${mailData[8][1]}</p>
      <p>Curtains : ${mailData[9][1]}</p>
      <p>Big Carpet : ${mailData[10][1]}</p>
      <h2>Total quantity : ${req.body.tquan}</h2>
      <h1>Price payable : ${req.body.pricep}</h1>`
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

  });

})
app.post('/order-placed-bangalore/home',(req,res)=>{

    // create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: 'unekcustomercare@gmail.com', // generated ethereal user
        pass: 'Yesandno@123'  // generated ethereal password
    }
  });
  var mailingList=['nabeelnov77@gmail.com','shariffsharif27@gmail.com','ziyanzaid77@gmail.com']
  // setup email data with unicode symbols
  let mailOptions = {
      from: 'unekcustomercare@gmail.com', // sender address
      to: mailingList, // list of receivers
      subject: "New order(Bangalore/home)", // Subject line
      text: `New Order`, // plain text body
      html:`<p>Name : ${req.body.name}</p>
      <p>Number : ${req.body.number}</p>
      <p>Address : ${req.body.address}</p>
      <p>Shirt and pant(pair) : ${mailData[0][1]}</p>
      <p>Shirt : ${mailData[1][1]}</p>
      <p>Pant : ${mailData[2][1]}</p>
      <p>Dresses : ${mailData[3][1]}</p>
      <p>Bed Cover (Single) : ${mailData[4][1]}</p>
      <p>Bed Cover (Double) : ${mailData[5][1]}</p>
      <p>Blankets(Big) : ${mailData[6][1]}</p>
      <p>Blankets(Small) : ${mailData[7][1]}</p>
      <p>Pillow : ${mailData[8][1]}</p>
      <p>Curtains(Small)(With Iron) : ${mailData[9][1]}</p>
      <p>Curtains(Medium)(With Iron) : ${mailData[10][1]}</p>
      <p>Curtains(Large)(With Iron) : ${mailData[11][1]}</p>
      <p>${mailData[12][0]} : ${mailData[12][1]}</p>
      <p>${mailData[13][0]} : ${mailData[13][1]}</p>
      <p>${mailData[14][0]} : ${mailData[14][1]}</p>
      <p>${mailData[15][0]} : ${mailData[15][1]}</p>
      <p>${mailData[16][0]} : ${mailData[16][1]}</p>
      <p>${mailData[17][0]} : ${mailData[17][1]}</p>
      <p>${mailData[18][0]} : ${mailData[18][1]}</p>
      
      <h2>Total quantity : ${req.body.tquan}</h2>
      <h1>Price payable : ${req.body.pricep}</h1>`
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

  });

})
app.post('/order-placed-bangalore/hostel',(req,res)=>{

    // create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: 'unekcustomercare@gmail.com', // generated ethereal user
        pass: 'Yesandno@123'  // generated ethereal password
    }
  });
  var mailingList=['nabeelnov77@gmail.com','shariffsharif27@gmail.com','ziyanzaid77@gmail.com']
  // setup email data with unicode symbols
  let mailOptions = {
      from: 'unekcustomercare@gmail.com', // sender address
      to: mailingList, // list of receivers
      subject: "New order(Bangalore/hostel)", // Subject line
      text: `New Order`, // plain text body
      html:`<p>Name : ${req.body.name}</p>
      <p>Number : ${req.body.number}</p>
      <p>Address : ${req.body.address}</p>
      <p>Shirt and pant(pair) : ${mailData[0][1]}</p>
      <p>Shirt : ${mailData[1][1]}</p>
      <p>Pant : ${mailData[2][1]}</p>
      <p>Dresses : ${mailData[3][1]}</p>
      <p>Bed Cover (Single) : ${mailData[4][1]}</p>
      <p>Bed Cover (Double) : ${mailData[5][1]}</p>
      <p>Blankets(Big) : ${mailData[6][1]}</p>
      <p>Blankets(Small) : ${mailData[7][1]}</p>
      <p>Pillow : ${mailData[8][1]}</p>
      <p>Curtains(Small)(With Iron) : ${mailData[9][1]}</p>
      <p>Curtains(Medium)(With Iron) : ${mailData[10][1]}</p>
      <p>Curtains(Large)(With Iron) : ${mailData[11][1]}</p>
      <p>${mailData[12][0]} : ${mailData[12][1]}</p>
      <p>${mailData[13][0]} : ${mailData[13][1]}</p>
      <p>${mailData[14][0]} : ${mailData[14][1]}</p>
      <p>${mailData[15][0]} : ${mailData[15][1]}</p>
      <p>${mailData[16][0]} : ${mailData[16][1]}</p>
      
      <h2>Total quantity : ${req.body.tquan}</h2>
      <h1>Price payable : ${req.body.pricep}</h1>`
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

  });

})


app.listen(port,()=>{
    console.log('server up at '+port);
})